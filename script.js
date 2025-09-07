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
  .from(
    ".page2-tag h1",
    {
      opacity: 0,
    },
    "a+=1.5"
  )

  .from(
    ".tag2-line1,.tag2-line2",
    {
      opacity: 0,
    },
    "a+=1.5"
  )
  .from(".right-arrow,.left-arrow", {
    scale: 0,
  })
  .to(".gallery", {
    opacity: 1,
  });

// -------------------------------------------------
let mainDiv = document.querySelector(".main-div");
let right = document.querySelector(".right-arrow");
let left = document.querySelector(".left-arrow");

let Name = document.querySelector(".page2-tag h1");
let galleryBox2 = document.querySelector(".gallery-box2");
let galleryBox1 = document.querySelector(".gallery-box1 h1");
let index = 0; // Current slide index

// Data for each slide
const slides = [
  {
    name: "Zarah Khan",
    description:
      "Co-Founder of STAN WORLDWIDE. Creative with 20+ years shaping brands at the intersection of culture, tech, art & design.",
    text: "<h1>Food <br> Health <br> Music</h1>",
    imgSrc: "/Images/zarah-back-Photoroom.webp",
    bgColor: "#63594F",
  },
  {
    name: "Carla Poirier",
    description:
      "Creative Director and Brand Strategist whose work sits at the intersection of cultural curation and identity-building.",
    text: "<h1>Design <br> Fashion <br> Beauty</h1>",
    imgSrc: "/Images/carla-back-Photoroom.webp",
    bgColor: "#5589CE",
  },
  {
    name: "Kristian Grove Møller",
    description:
      "Co-Founder of STAN WORLDWIDE. Creative with 20+ years shaping brands at the intersection of culture, tech, art & design.",
    text: "<h1>Culture <br> Art <br> Design</h1>",
    imgSrc: "/Images/kristian-back-Photoroom.webp",
    bgColor: "#B0AB92",
  },
  {
    name: "Hasan Khalid",
    description:
      "Anti-disciplinary artist and former Director of Creative Development for GQ magazine.",
    text: "<h1>Travel <br> Food & Wine <br> Music</h1>",
    imgSrc: "/Images/hasan-back-Photoroom.webp",
    bgColor: "#95A7B5",
  },
];

// Function to update the slide
function updateSlide() {
  const images = document.querySelectorAll(
    ".main-img, .img1, .img2, .img3, .img4, .img5, .img6"
  );

  const current = slides[index];

  // Update content
  galleryBox2.innerHTML = current.text;
  galleryBox1.innerHTML = current.description;
  Name.textContent = current.name;
  images.forEach((img) => (img.src = current.imgSrc));
  mainDiv.style.backgroundColor = current.bgColor;

  // GSAP animation
  gsap.from(".page2-tag, .gallery-box1, .gallery-box2", {
    y: 70,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
}

// Right arrow (Next)
right.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

// Left arrow (Previous)
left.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});

// Initial load
updateSlide();

// -----------------------------------------------------------

const heading = document.getElementById("animated-heading");
const text = heading.textContent;
heading.innerHTML = "";

text.split("").forEach((char) => {
  const span = document.createElement("span");
  span.className = "letter";
  span.textContent = char;
  heading.appendChild(span);
});

// ✅ Page2 Slide In
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "0.1%",
      end: "90%",
      scrub: 0.8,
      pin: true,
    },
  })
  .to(".page2", {
    bottom: "0%",
    left: "0%",
    ease: "sine.inOut",
  });

// ------------------------------------------------------------------

// ✅ Animated Heading Letters
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "0.2%",
      end: "100%",
      scrub: 1,
      pin: true,
      markers: true,
    },
  })
  .to(".letter", {
    color: "black",
    stagger: 0.07,
    ease: "power1.inOut",
  });

// ---------------------------------------------------------------

// ✅ Page2-Part2 Upward Scroll
let size;

function createTimeline() {
  if (size) {
    size.kill(); // kill existing timeline to prevent stacking
  }

  size = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "0.3%",
      end: "100%",
      scrub: 1,
      pin: true,
    },
  });

  if (window.innerWidth > 1000) {
    size.fromTo(
      ".page2-part2",
      { top: "80%" },
      {
        top: "-100%",
        ease: "sine.inOut",
      }
    );
  } else {
    size.fromTo(
      ".page2-part2",
      { right: "-100%" },
      {
        right: "120%",
        ease: "sine.inOut",
      }
    );
  }
}

// Create timeline initially
createTimeline();

// Recreate timeline on resize with debounce
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    createTimeline();
    ScrollTrigger.refresh(); // Refresh ScrollTrigger to update positions
  }, 200); // adjust delay as needed
});

const shops = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "0.4%",
    end: "250%",
    scrub: 1,
    pin: true,
    markers: true,
  },
});

shops
  .to(
    ".page2-part1,.page2-part2",
    {
      opacity: 0,
    },
    "a"
  )
  .to(
    ".shops",
    {
      top: "-190%",
    },
    "a"
  )
  .to(
    ".curate",
    {
      top: "36%",
    },
    "b-=0.5"
  )
  .to(
    ".your",
    {
      top: "55%",
    },
    "b-=0.5"
  )
  .to(
    ".taste",
    {
      top: "75%",
    },
    "b-=0.5"
  );
