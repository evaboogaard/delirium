const clickMePlease = document.querySelector('.trip-button');

function tripMode() {
  document.documentElement.classList.toggle('trip');
}

clickMePlease.addEventListener('click', tripMode);
