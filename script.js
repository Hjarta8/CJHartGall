// Enable ScrollTrigger pinning for each .art-image
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const image = section.querySelector(".art-image");

  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "middle center",
    pin: image,
    pinSpacing: true,
    scrub: true
  });
});
