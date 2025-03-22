document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');

  if (menu && menuLinks) {
    menu.addEventListener('click', function () {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active');
    });
  }

  // Live Hawaiian date/time
  function updateDateTime() {
    const options = {
      timeZone: 'Pacific/Honolulu',
      timeZoneName: 'short',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };

    const now = new Date();
    const hawaiiTime = now.toLocaleString('en-US', options);

    const datetime = document.getElementById('datetime');
    const year = document.getElementById('year');

    if (datetime && year) {
      datetime.textContent = `Hawaiian Time: ${hawaiiTime}`;
      year.textContent = now.getFullYear();
    }
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();
});
