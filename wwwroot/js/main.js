// ====================================================
// DashboardInterop — Blazor WebAssembly JS interop
// ====================================================

window.DashboardInterop = (function () {
    'use strict';

    function applyTheme(theme, persist) {
        document.documentElement.setAttribute('data-theme', theme);
        if (persist) {
            try { localStorage.setItem('theme', theme); } catch (e) { /* storage indisponible */ }
        }
        const themeIcon = document.getElementById('themeIcon');
        const themeToggle = document.getElementById('themeToggle');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre');
        }
    }

    function init() {
        // Sync icon at page load — no persistence
        applyTheme(document.documentElement.getAttribute('data-theme') || 'dark', false);

        // Theme toggle — reset listeners then re-attach
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const fresh = themeToggle.cloneNode(true);
            themeToggle.parentNode.replaceChild(fresh, themeToggle);
            fresh.addEventListener('click', function () {
                const current = document.documentElement.getAttribute('data-theme');
                applyTheme(current === 'dark' ? 'light' : 'dark', true);
            });
        }

        // OS theme change — no persistence
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            let saved = null;
            try { saved = localStorage.getItem('theme'); } catch (ex) { saved = null; }
            if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
        });

        // Sidebar toggle
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        function toggleSidebar() {
            const isDesktop = window.innerWidth > 992;
            if (isDesktop) {
                document.body.classList.toggle('sidebar-closed');
            } else {
                if (sidebar) sidebar.classList.toggle('open');
                if (overlay) overlay.classList.toggle('active');
            }
            const isOpen = isDesktop
                ? !document.body.classList.contains('sidebar-closed')
                : !!(sidebar && sidebar.classList.contains('open'));
            if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        }

        // Reset sidebar listeners then re-attach
        if (hamburgerBtn) {
            const freshBtn = hamburgerBtn.cloneNode(true);
            hamburgerBtn.parentNode.replaceChild(freshBtn, hamburgerBtn);
            freshBtn.addEventListener('click', toggleSidebar);
        }
        if (overlay) {
            const freshOverlay = overlay.cloneNode(true);
            overlay.parentNode.replaceChild(freshOverlay, overlay);
            freshOverlay.addEventListener('click', toggleSidebar);
        }

        // Auto-close sidebar on resize
        window.addEventListener('resize', function () {
            if (window.innerWidth > 992) {
                const s = document.getElementById('sidebar');
                const o = document.getElementById('overlay');
                if (s) s.classList.remove('open');
                if (o) o.classList.remove('active');
            }
        });
    }

    function initDate() {
        const el = document.getElementById('currentDate');
        if (el) {
            el.textContent = new Date().toLocaleDateString('fr-FR', {
                day: 'numeric', month: 'long', year: 'numeric'
            });
        }
    }

    function _destroyChart(canvasId) {
        if (!window.Chart) return;
        const canvas = document.getElementById(canvasId);
        if (canvas) {
            const existing = Chart.getChart(canvas);
            if (existing) existing.destroy();
        }
    }

    function initMainChart() {
        const canvas = document.getElementById('mainChart');
        if (!canvas || !window.Chart) return;
        _destroyChart('mainChart');
        new Chart(canvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
                datasets: [{
                    label: 'Revenus (€)',
                    data: [45000, 52000, 48000, 61000, 58000, 72000, 85000],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#6366f1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#94a3b8', font: { size: 11 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8', font: { size: 11 } }
                    }
                }
            }
        });
    }

    function initAnalyticsChart() {
        const canvas = document.getElementById('analyticsChart');
        if (!canvas || !window.Chart) return;
        _destroyChart('analyticsChart');
        new Chart(canvas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                datasets: [{
                    label: 'Visiteurs',
                    data: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderColor: '#6366f1',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#94a3b8', font: { size: 11 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8', font: { size: 11 } }
                    }
                }
            }
        });
    }

    function initFinancesChart() {
        const canvas = document.getElementById('financesChart');
        if (!canvas || !window.Chart) return;
        _destroyChart('financesChart');
        new Chart(canvas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Produits', 'Services', 'Abonnements', 'Partenariats'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { color: '#94a3b8', padding: 20 }
                    }
                }
            }
        });
    }

    return { init, initDate, initMainChart, initAnalyticsChart, initFinancesChart };
})();