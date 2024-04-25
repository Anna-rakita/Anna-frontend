/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: "#485AFA",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

//navbar

const navLink = document.querySelectorAll(".nav-link");
const hamburgerBtn = document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("change");

  navLink.forEach((link) => {
    link.classList.toggle("responsive");
  });
});

//carousel certificates

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const certificates = [
  "/certificate-frontend.png",
  "/certificate-html.jpg",
  "/certificate-bootstrap.jpg",
  "/certificate-gsap.jpg",
  "/sololearn-html.jpg",
  "/sololearn-css.jpg",
  "/sololearn-sql.jpg",
];

let i = 0;

btnNext.addEventListener("click", () => {
  i++;
  if (i > certificates.length - 1) {
    i = 0;
  }
  document.querySelector(".certificate").src = certificates[i];
});

btnPrev.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = certificates.length - 1;
  }
  document.querySelector(".certificate").src = certificates[i];
});

//certificate zoom

const certificate = document.querySelector(".certificate");
const certificateZoom = document.querySelector(".certificate-zoom");
const btnClose = document.querySelector(".close-btn");

certificate.addEventListener("click", () => {
  certificateZoom.style.display = "flex";
  document.querySelector(".zoom-content").src = certificates[i];
});

btnClose.addEventListener("click", () => {
  certificateZoom.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === certificateZoom) {
    certificateZoom.style.display = "none";
  }
});

window.addEventListener("touchend", (e) => {
  if (e.target === certificateZoom) {
    certificateZoom.style.display = "none";
  }
});

// gsap

// Add animation for skills

ScrollTrigger.create({
  trigger: ".btn-contact",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.from(".iconSkills", { ease: "power1", opacity: 0, duration: 2 });
  },
  onLeave: () => {
    gsap.set(".iconSkills", { opacity: 1 });
  },
});

// Add animation for contact-image

ScrollTrigger.create({
  trigger: ".inputAll",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    gsap.from(".it-girl", { x: -1000, opacity: 0, duration: 2 });
  },
  onLeave: () => {
    gsap.set(".it-girl", { opacity: 1 });
  },
});

// Add animation for inputs

ScrollTrigger.create({
  trigger: ".inputAll",
  start: "top center",
  end: "bottom center",
  onEnter: (self) => {
    gsap.from(".input", {
      y: 1000,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      onComplete: () => self.scroll(),
    });
  },
  onLeaveBack: (self) => {
    gsap.set(".input", { opacity: 1 });
    self.scroll();
  },
  onLeave: (self) => {
    gsap.set(".input", { opacity: 1 });
    self.scroll();
  },
});
