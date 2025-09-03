// ✅ Lenis Setup (Smooth Scroll)
const lenis = new Lenis({
  duration: 1.2, // slower scroll effect
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
  smooth: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const imageSets = {
  box1: [
    "https://cdn.telescope.fyi/landing/hero/eac2/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac2/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac2/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac2/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac2/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac2/0.jpg",
  ],

  box2: [
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor2/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor2/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor2/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor2/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor2/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor2/5.jpg",
  ],

  box3: [
    "https://cdn.telescope.fyi/landing/hero/home-tech1/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech1/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech1/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech1/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech1/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech1/2.jpg",
  ],
  box4: [
    "https://cdn.telescope.fyi/landing/hero/fashion3/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion3/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion3/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion3/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion3/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion3/5.jpg",
  ],
  box5: [
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor1/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor1/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor1/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor1/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor1/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor1/0.jpg",
  ],
  box6: [
    "https://cdn.telescope.fyi/landing/hero/home-tech2/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech2/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech2/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech2/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech2/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/home-tech2/1.jpg",
  ],

  box7: [
    "https://cdn.telescope.fyi/landing/hero/eat-drinks2/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks2/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks2/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks2/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks2/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks2/3.jpg",
  ],

  box8: [
    "https://cdn.telescope.fyi/landing/hero/eat-drinks1/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks1/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks1/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks1/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks1/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/eat-drinks1/4.jpg",
  ],
  box9: [
    "https://cdn.telescope.fyi/landing/hero/fashion1/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion1/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion1/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion1/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion1/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion1/1.jpg",
  ],
  box10: [
    "https://cdn.telescope.fyi/landing/hero/eac1/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac1/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac1/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac1/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac1/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/eac1/0.jpg",
  ],
  box11: [
    "https://cdn.telescope.fyi/landing/hero/fashion2/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion2/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion2/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion2/1.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion2/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/fashion2/3.jpg",
  ],
  box12: [
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor3/2.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor3/3.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor3/4.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor3/5.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor3/0.jpg",
    "https://cdn.telescope.fyi/landing/hero/sports-outdoor3/1.jpg",
  ],
};

document.querySelectorAll(".box").forEach((box) => {
  const id = box.id;
  const img = box.querySelector("img");

  if (imageSets[id] && img) {
    // 🔁 Pick a random index from 0 to 5
    const randomIndex = Math.floor(Math.random() * 6);

    // 🧠 Set the image src and store the index
    img.src = imageSets[id][randomIndex];
    box.dataset.index = randomIndex;

    // 🔁 Add click event to cycle through images
    box.addEventListener("click", () => {
      let currentIndex = parseInt(box.dataset.index, 10);
      const nextIndex = (currentIndex + 1) % 6;
      box.dataset.index = nextIndex;
      img.src = imageSets[id][nextIndex];
    });
  }
});

// ✅ Entry + Exit Animation for .box
const boxes = document.querySelectorAll(".box");
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

const exitAnimations = [];

boxes.forEach((box, i) => {
  const rect = box.getBoundingClientRect();
  const boxX = rect.left + rect.width / 2;
  const boxY = rect.top + rect.height / 2;
  const dx = boxX - centerX;
  const dy = boxY - centerY;

  gsap.from(box, {
    x: -dx,
    y: -dy,
    scale: 0,
    opacity: 0,
    duration: 2, // slowed down
    ease: "power2.out",
    delay: i * 0.1,
  });

  exitAnimations.push({ element: box, x: dx, y: dy });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    start: "top top",
    end: "bottom top",
    scrub: 0.5,
  },
});

exitAnimations.forEach(({ element, x, y }) => {
  tl.to(
    element,
    {
      x: x * 2,
      y: y * 2,
      scale: 1.5,
      ease: "sine.inOut",
    },
    0
  );
});

// ✅ Lines Fade & Slide
gsap.from(".line1, .line2, .line3", {
  opacity: 0,
  y: 70,
  duration: 3,
  stagger: 0.6,
  ease: "power2.out",
});

// ✅ Line1 Fade Out
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "10%",
      scrub: 0.5,
    },
  })
  .to(".line1", { opacity: 0, duration: 1 });

const heading = document.getElementById("animated-heading");
const text = heading.textContent;
heading.innerHTML = "";

text.split("").forEach((char) => {
  const span = document.createElement("span");
  span.className = "letter";
  span.textContent = char;
  heading.appendChild(span);
});

// ✅ Main Image & Text Scaling Timeline
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "250%",
    scrub: 1,
    pin: true,
  },
});

tl1
  .to(
    ".line2",
    {
      left: "-20%",
      ease: "power1.inOut",
    },
    "a"
  )
  .to(
    ".line3",
    {
      right: "-30%",
      ease: "power1.inOut",
    },
    "a"
  )
  .to(
    ".main-div",
    {
      scale: 1,
      ease: "power2.inOut",
    },
    "a"
  )
  .to(
    [
      ".img1",
      ".img2",
      ".img3",
      ".img4",
      ".img5",
      ".img6",
      ".main-div-heading h1",
    ],
    {
      scale: 1,
      opacity: (i, target) =>
        target.matches(".main-div-heading h1") ? 1 : undefined,
      stagger: (i, target) =>
        target.matches(".main-div-heading h1") ? 0.02 : undefined,
      stagger: 0.025,
    },
    "a"
  )
  .to(".main-div-heading", {
    opacity: 0,
  })
  // .to(".cursor",{
  //   scale:1,
  // })
  .from(".page2-tag", {
    opacity: 0,
  })
  .from(".tag2-line1,.tag2-line2", {
    opacity: 0,
  })
  .to(".gallery", {
    opacity: 1,
  });