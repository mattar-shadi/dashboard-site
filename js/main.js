const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const body = document.body;

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
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('fr-FR', {
  day: 'numeric', month: 'long', year: 'numeric'
});

// Chart.js Configuration
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
