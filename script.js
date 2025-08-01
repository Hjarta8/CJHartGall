gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const imageWrapper = section.querySelector(".art-image");

  ScrollTrigger.create({
    trigger: imageWrapper,        // ✅ use the image container itself
    start: "top top",             // ✅ when image hits top of viewport
    endTrigger: section,          // optional: use section to define end
    end: "bottom bottom",         // pin until section ends
    pin: imageWrapper,
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
