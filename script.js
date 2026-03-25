const statusElement = document.getElementById('server-status');
const toggleThemeButton = document.getElementById('toggle-theme');

const statusMessages = [
  '🟢 En línea · 124 jugadores conectados',
  '🟡 Mantenimiento programado hoy 23:00 UTC',
  '🟢 En línea · Eventos activos este fin de semana'
];

function getStatusByDay(date = new Date()) {
  return statusMessages[date.getDay() % statusMessages.length];
}

statusElement.textContent = getStatusByDay();

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
