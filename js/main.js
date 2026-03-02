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
const formattedDate = new Date().toLocaleDateString('fr-FR', {
  day: 'numeric', month: 'long', year: 'numeric'
});
document.getElementById('currentDate').textContent = formattedDate;

// Section metadata: title and subtitle per section
const sectionMeta = {
  dashboard: {
    title: 'Bienvenue sur Nexus Dashboard',
    subtitle: `Aperçu de vos performances pour aujourd'hui, ${formattedDate}`
  },
  analytics: {
    title: 'Analytics',
    subtitle: 'Vue d\'ensemble de votre trafic et engagement'
  },
  clients: {
    title: 'Clients',
    subtitle: 'Gestion et suivi de votre base clients'
  },
  commandes: {
    title: 'Commandes',
    subtitle: 'Suivi et gestion de toutes vos commandes'
  },
  finances: {
    title: 'Finances',
    subtitle: 'Analyse de vos revenus et dépenses'
  },
  parametres: {
    title: 'Paramètres',
    subtitle: 'Configuration de votre compte et préférences'
  }
};

const pageTitle = document.querySelector('.page-title h1');
const pageSubtitle = document.querySelector('.page-title p');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const sections = document.querySelectorAll('.section-content');

// Track which section charts have been initialized
const chartsInitialized = { dashboard: true };

// Initialize a section's chart on first display
function initSectionChart(section) {
  if (section === 'analytics') {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
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
  } else if (section === 'finances') {
    const ctx = document.getElementById('financesChart').getContext('2d');
    new Chart(ctx, {
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
}

// Nav link click handler
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    if (!section) return;

    // Update active nav link
    navLinks.forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');

    // Show corresponding section, hide others
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${section}`).classList.add('active');

    // Update page title and subtitle
    const meta = sectionMeta[section];
    if (meta) {
      pageTitle.textContent = meta.title;
      pageSubtitle.textContent = meta.subtitle;
    }

    // Initialize chart on first display
    if (!chartsInitialized[section]) {
      chartsInitialized[section] = true;
      initSectionChart(section);
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 992) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
});

// Chart.js Configuration — Dashboard main chart
const ctx = document.getElementById('mainChart').getContext('2d');
new Chart(ctx, {
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
