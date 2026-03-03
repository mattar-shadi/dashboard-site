const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const body = document.body;

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function applyTheme(theme, persist = false) {
  document.documentElement.setAttribute('data-theme', theme);
  if (persist) {
    try {
      localStorage.setItem('theme', theme);
    } catch (e) { /* storage indisponible */ }
  }
  if (theme === 'dark') {
    themeIcon.className = 'fas fa-moon';
    themeToggle.setAttribute('aria-label', 'Passer en mode clair');
  } else {
    themeIcon.className = 'fas fa-sun';
    themeToggle.setAttribute('aria-label', 'Passer en mode sombre');
  }
}

// Sync icon at page load — no persistence
applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

// User click — persist
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark', true);
});

// OS change — no persistence
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { saved = null; }
  if (!saved) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

// Toggle Logic
function toggleSidebar() {
  if (window.innerWidth > 992) {
    // Desktop: Toggle body class to shift content
    body.classList.toggle('sidebar-closed');
  } else {
    // Mobile: Toggle sidebar visibility and overlay
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }
  const isOpen = sidebar.classList.contains('open') || !body.classList.contains('sidebar-closed');
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
}

hamburgerBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Auto-close on resize if needed
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }
});

// Date
const currentDateEl = document.getElementById('currentDate');
if (currentDateEl) {
  const formattedDate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  currentDateEl.textContent = formattedDate;
}

// Chart.js — Dashboard main chart
const mainChartCanvas = document.getElementById('mainChart');
if (mainChartCanvas) {
  new Chart(mainChartCanvas.getContext('2d'), {
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

// Chart.js — Analytics chart
const analyticsChartCanvas = document.getElementById('analyticsChart');
if (analyticsChartCanvas) {
  new Chart(analyticsChartCanvas.getContext('2d'), {
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

// Chart.js — Finances chart
const financesChartCanvas = document.getElementById('financesChart');
if (financesChartCanvas) {
  new Chart(financesChartCanvas.getContext('2d'), {
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
