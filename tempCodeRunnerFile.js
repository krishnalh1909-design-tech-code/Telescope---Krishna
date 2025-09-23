

// -------------------------------------------
// ScrollTrigger.matchMedia to handle responsive GSAP timelines
ScrollTrigger.matchMedia({
  // Desktop (above 1000px width)
  "(min-width: 1001px)": function () {
    // Shops timeline
    const shops = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "0.4%",
        end: "200%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    shops
      .to(".page2-part2", { opacity: 0 }, "a")
      .to(".shops", { top: "-250%" }, "a")
      .from(".curate1", { x: 1500, y: 0 }, "b-=0.69")
      .from(".curate2,.curate4,.curate6", { x: 1500, y: -1500 }, "c-=0.69")
      .from(".curate3,.curate5", { x: 1500, y: 1500 }, "d-=0.69")
      .from(".your1,.your3", { x: 1500, y: -1500 }, "e-=0.6")
      .from(".your2,.your4", { x: 1500, y: 1500 }, "e-=0.6")
      .from(".taste1,.taste3,.taste5", { x: 1500, y: -1500 }, "f-=0.5")
      .from(".taste2,.taste4", { x: 1500, y: 1500 }, "f-=0.5");

    // Page3 timeline
    const page3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50.7%",
        end: "200%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    page3
      .to(".page3-line2", { left: "-20%", ease: "power1.inOut" }, "a")
      .to(".page3-line3", { right: "-30%", ease: "power1.inOut" }, "a")
      .to(".page3-main-div", { scale: 1, ease: "power2.inOut" }, "a")
      .to(
        [
          ".page3-img1",
          ".page3-img2",
          ".page3-img3",
          ".page3-img4",
          ".page3-img5",
          ".page3-img6",
        ],
        { scale: 1, stagger: 0.025 },
        "a"
      )
      .to(".clip-bg", { opacity: 1 })
      .from(".tag3-line1,.tag3-line2", { opacity: 0 });

    // tlNew circular motion timeline
    const tlNew = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50.8%",
        end: "+=5000",
        scrub: 2,
        pin: true,
        // markers: true,
      },
    });

    const centerX2 = 0;
    const centerY2 = 48;
    const radius = 109;
    const steps = 72;
    const durationPerStep = 1 / steps;
    const boxCount = 13;
    const boxDelay = 0.05;

    const boxImageSrcs = [
      "./Images/back.webp",
      "/Images/1.webp",
      "/Images/0.webp",
      "/Images/10.webp",
      "/Images/9.webp",
      "/Images/8.webp",
      "/Images/7.webp",
      "/Images/6.webp",
      "/Images/5.webp",
      "/Images/4.webp",
      "/Images/3.webp",
      "/Images/2.webp",
      "./Images/back.webp",
    ];

    let lastBoxAtTop = null;

    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * Math.PI * 2 - Math.PI / 2;
      const x = centerX2 + radius * Math.cos(angle);
      const y = centerY2 + radius * Math.sin(angle);

      for (let b = 1; b <= boxCount; b++) {
        const boxSelector = `.box${b}`;
        const delay = i * durationPerStep - boxDelay * b;

        tlNew.to(
          boxSelector,
          {
            left: `${x}%`,
            top: `${y}%`,
            duration: durationPerStep,
            ease: "none",
          },
          delay
        );

        const isAtTop =
          Math.abs(angle) < 0.1 || Math.abs(angle - 2 * Math.PI) < 0.1;

        if (isAtTop) {
          tlNew.call(
            () => {
              if (lastBoxAtTop !== b) {
                lastBoxAtTop = b;
                const img = document.querySelector(".clip-bg img");
                if (img && boxImageSrcs[b - 1]) {
                  img.src = boxImageSrcs[b - 1];
                }
              }
            },
            null,
            delay
          );
        }
      }
    }

    tlNew
      .fromTo(".h1-list h1", { y: 0 }, { y: -3500, stagger: 0.035 }, "-=1.4")
      .to(".main-bottom", { top: "0%" }, "a-=0.9");

    // tlBottom timeline
    const tlBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50.9%",
        end: "200%",
        scrub: 2,
        pin: true,
        // markers: true,
      },
    });

    tlBottom
      .to(".bottom-heading1,.bottom-heading2", { opacity: 0 }, "+=1")
      .to(".bottom-heading3", { opacity: 1 }, "+=1")
      .to(
        ".telescope",
        {
          height: "50vh",
          width: "90vw",
          duration: 5,
          top: "69%",
        },
        "z+=2"
      )
      .to(
        ".telescope-heading",
        {
          fontSize: "6vw",
          duration: 5,
          left: "50%",
        },
        "z+=2"
      )
      .to(".nav3", { top: "10%", left: "90%" }, "z+=2")
      .to(".nav1", { opacity: 1 });
  },

  // Mobile/tablet (1000px and below)
  "(max-width: 1000px)": function () {
    // Adjust these timelines for mobile if needed, e.g. shorter pin, less scrub

    const shops = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "0.4%",
        end: "150%",
        scrub: 0.7,
        pin: true,
      },
    });

    shops
      .to(".page2-part2", { opacity: 0 }, "a")
      .to(".shops", { top: "-260%" }, "a")
      .from(".curate1", { x: 800, y: 0 }, "b-=0.65")
      .from(".curate2,.curate4,.curate6", { x: 800, y: -800 }, "c-=0.65")
      .from(".curate3,.curate5", { x: 800, y: 800 }, "d-=0.65")
      .from(".your1,.your3", { x: 800, y: -800 }, "e-=0.6")
      .from(".your2,.your4", { x: 800, y: 800 }, "e-=0.6")
      .from(".taste1,.taste3,.taste5", { x: 800, y: -800 }, "f-=0.5")
      .from(".taste2,.taste4", { x: 800, y: 800 }, "f-=0.5");

    // Simplify or omit other timelines on mobile or scale down animation values as needed

    const page3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50.7%",
        end: "200%",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    page3
      .to(".page3-line2", { left: "-20%", ease: "power1.inOut" }, "a")
      .to(".page3-line3", { right: "-30%", ease: "power1.inOut" }, "a")
      .to(".page3-main-div", { scale: 1, ease: "power2.inOut" }, "a")
      .to(
        [
          ".page3-img1",
          ".page3-img2",
          ".page3-img3",
          ".page3-img4",
          ".page3-img5",
          ".page3-img6",
        ],
        { scale: 1, stagger: 0.025 },
        "a"
      )
      .to(".clip-bg", { opacity: 1 })
      .from(".tag3-line1,.tag3-line2", { opacity: 0 });

    // tlNew circular motion timeline
    const tlNew = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50.8%",
        end: "+=5000",
        scrub: 2,
        pin: true,
        // markers: true,
      },
    });

    const centerX2 = 0;
    const centerY2 = 48;
    const radius = 109;
    const steps = 72;
    const durationPerStep = 1 / steps;
    const boxCount = 13;
    const boxDelay = 0.05;

    const boxImageSrcs = [
      "./Images/back.webp",
      "/Images/1.webp",
      "/Images/0.webp",
      "/Images/10.webp",
      "/Images/9.webp",
      "/Images/8.webp",
      "/Images/7.webp",
      "/Images/6.webp",
      "/Images/5.webp",
      "/Images/4.webp",
      "/Images/3.webp",
      "/Images/2.webp",
      "./Images/back.webp",
    ];

    let lastBoxAtTop = null;

    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * Math.PI * 2 - Math.PI / 2;
      const x = centerX2 + radius * Math.cos(angle);
      const y = centerY2 + radius * Math.sin(angle);

      for (let b = 1; b <= boxCount; b++) {
        const boxSelector = `.box${b}`;
        const delay = i * durationPerStep - boxDelay * b;

        tlNew.to(
          boxSelector,
          {
            left: `${x}%`,
            top: `${y}%`,
            duration: durationPerStep,
            ease: "none",
          },
          delay
        );

        const isAtTop =
          Math.abs(angle) < 0.1 || Math.abs(angle - 2 * Math.PI) < 0.1;

        if (isAtTop) {
          tlNew.call(
            () => {
              if (lastBoxAtTop !== b) {
                lastBoxAtTop = b;
                const img = document.querySelector(".clip-bg img");
                if (img && boxImageSrcs[b - 1]) {
                  img.src = boxImageSrcs[b - 1];
                }
              }
            },
            null,
            delay
          );
        }
      }
    }

    tlNew
      .fromTo(".h1-list h1", { y: 0 }, { y: -3500, stagger: 0.035 }, "-=1.4")
      .to(".main-bottom", { top: "0%" }, "a-=0.9");

    // tlBottom timeline
    const tlBottom = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "50.9%",
        end: "200%",
        scrub: 2,
        pin: true,
        // markers: true,
      },
    });

    tlBottom
      .to(".bottom-heading1,.bottom-heading2", { opacity: 0 }, "+=1")
      .to(".bottom-heading3", { opacity: 1 }, "+=1")
      .to(
        ".telescope",
        {
          height: "50vh",
          width: "90vw",
          duration: 5,
          top: "69%",
        },
        "z+=2"
      )
      .to(
        ".telescope-heading",
        {
          fontSize: "6vw",
          duration: 5,
          left: "50%",
        },
        "z+=2"
      )
      .to(".nav3", { top: "10%", left: "90%" }, "z+=2")
      .to(".nav1", { opacity: 1 });
  },
});
