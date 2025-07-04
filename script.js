// script.js
// Scroll-triggered transitions using Intersection Observer
const revealElements = document.querySelectorAll('.feature-card, .stat');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => {
  observer.observe(el);
});
