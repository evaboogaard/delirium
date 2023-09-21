const allSections = document.querySelectorAll('.observe');

const options = {
  rootMargin: '20px',
  treshold: 0.5,
};

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('shown');
    }
  });
}

const observer = new IntersectionObserver(callbackFunction, options);

allSections.forEach((item) => {
  observer.observe(item);
});
