// Enable ScrollTrigger pinning for each .art-image
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const image = section.querySelector(".art-image");

  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "bottom top",
    pin: image,
    pinSpacing: true,
    scrub: true
  });
});
