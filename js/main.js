// Fade in ambient glow
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Scroll micro-motion for glow
const glow = document.querySelector(".ambient-glow");
if (glow) {
  window.addEventListener("scroll", () => {
    const offset = window.scrollY / 500; // adjust speed
    glow.style.transform = `translateX(${offset * 50}px)`;
  });
}
