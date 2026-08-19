// Felix Daniels Portfolio
// Simple interactions for navigation and user experience

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // Simple scroll reveal
  const revealItems = document.querySelectorAll(
    ".project, .process-grid > div, .case-details article"
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);

        }

      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(item => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });

});
