// Smooth hover pulse (future animation expansion ready)
document.querySelectorAll('.contact-card, .social a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.transition = '0.4s';
  });
});
