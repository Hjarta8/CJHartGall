gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const image = section.querySelector(".art-image");

  ScrollTrigger.create({
    trigger: section,
    start: "top bottom",
    end: "bottom bottom",
    pin: image,
    pinSpacing: true,
    scrub: true
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
