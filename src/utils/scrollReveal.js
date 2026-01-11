export function initScrollReveal() {
  const elements = [...document.querySelectorAll("[data-reveal]")];
  let currentIndex = 0;

  function onScroll() {
    if (currentIndex >= elements.length) return;

    const el = elements[currentIndex];
    const rect = el.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.75;

    if (rect.top < triggerPoint) {
      el.classList.add("active");
      currentIndex++;
    }
  }

  window.addEventListener("scroll", onScroll);
}
