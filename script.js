gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const imageWrapper = section.querySelector(".art-image");
  const image = imageWrapper.querySelector("img");

  // Pin the image wrapper
  ScrollTrigger.create({
    trigger: imageWrapper,
    start: "top top",
    end: "bottom bottom", // stays pinned for 1000px
    pin: imageWrapper,
    pinSpacing: true,
    scrub: true
  });

  // Animate image on scroll — gradual drift up
  gsap.fromTo(image, 
    { y: 0 }, 
    {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: imageWrapper,
        start: "top top",
        end: "bottom bottom", // same as pin duration
        scrub: true
      }
    }
  );

  // Fade-in image (opacity only!)
  gsap.to(image, {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: imageWrapper,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  // Fade-in text
  const text = section.querySelector(".art-text");
  gsap.to(text, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: text,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });

  // Load external description if needed
  const descPath = text?.dataset.desc;
  const descTarget = text?.querySelector(".desc-placeholder");

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
