gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const image = section.querySelector(".art-image img");

  // Create an animation to scrub
  gsap.to(image, {
    y: -100, // move up 100px over scroll
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top center",
      end: "bottom center",
      scrub: true,
      pin: section.querySelector(".art-image"),
      pinSpacing: true,
    },
  });




  // 💡 Description loading
  const textBlock = section.querySelector(".art-text");
  const descPath = textBlock?.dataset.desc;
  const descTarget = textBlock?.querySelector(".desc-placeholder");

  if (descPath && descTarget) {
    fetch(descPath)
      .then((res) => res.text())
      .then((html) => {
        descTarget.innerHTML = html;
      })
      .catch((err) => {
        descTarget.innerHTML = "<p>Error loading description.</p>";
        console.error("Failed to load:", descPath, err);
      });
  }
});
