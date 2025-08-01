gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".artwork").forEach((section) => {
  const imageWrapper = section.querySelector(".art-image");
  const image = imageWrapper.querySelector("img");

  // Pin the image wrapper
  ScrollTrigger.create({
    trigger: imageWrapper,
    start: "top top",
    end: "+=1000",            // stays pinned for 1000px of scroll
    pin: imageWrapper,
    pinSpacing: true,
    scrub: true
  });

  // Animate the image inside the pinned wrapper
  gsap.to(image, {
    y: -100,                 // move image up as you scroll down
    ease: "none",
    scrollTrigger: {
      trigger: imageWrapper,
      start: "top top",
      endTrigger: section,          // optional: use section to define end
      end: "bottom bottom",         // match pin duration
      scrub: true
    }
  });

  // Load external description if needed
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

    // Fade in artwork sections
    gsap.utils.toArray(".artwork").forEach((section) => {
    gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
        trigger: section,
        start: "top 80%", // when top of section hits 80% down viewport
        toggleActions: "play none none none"
        }
    });
    });


});
