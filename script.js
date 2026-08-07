// Project Data
const projectsData = [
  {
    id: 1,
    title: "Premium design Restaurant website",
    image: "./images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/taj-royal-restaurant",
    previewUrl: "https://thasneem9.github.io/taj-royal-restaurant/",
  },
  {
    id: 2,
    title: "InstaWave Full stack Social Media",
    image: "./images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/InstaWave---Copy",
    previewUrl: "https://www.youtube.com/watch?v=HR9lszepjRQ",
  },
  {
    id: 3,
    title: "View Point Homes Frontend Website",
    image: "./images/projects/22.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://thasneem9.github.io/viewPointTouristHome/",
    previewUrl: "https://thasneem9.github.io/viewPointTouristHome/",
  },
  {
    id: 4,
    title: "Different Birds and their Sounds",
    image: "./images/projects/333.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/birdSounds",
    previewUrl: "https://thasneem9.github.io/birdSounds/",
  },
  {
    id: 5,
    title: "Full Stack Blog Application",
    image: "./images/projects/blog.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/crud-blog-app",
    previewUrl: "https://youtu.be/rtoxiNASIXA",
  },
  {
    id: 6,
    title: "React Todo List application",
    image: "./images/projects/444.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/thasneem9/todoapp",
    previewUrl: "https://thasneem9.github.io/todoapp/",
  },
  {
    id: 7,
    title: "Currency Converter App",
    image: "./images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/ex231currency",
    previewUrl: "https://github.com/thasneem9/ex231currency/blob/main/README.md",
  },
  {
    id: 8,
    title: "3D Card Tailwind react",
    image: "./images/projects/7.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/3d-card/",
    previewUrl: "https://thasneem9.github.io/3d-card/",
  },
  {
    id: 9,
    title: "Mini Projects using HTML CSS BOOTSTRAP",
    image: "./images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/thasneem9/PORTFOLIO",
    previewUrl: "https://thasneem9.github.io/PORTFOLIO",
  }
];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initMobileMenu();
  initTabs();
  initProjectsFilter();
  initEmailJS();
});

// Typewriter Animation
function initTypewriter() {
  const words = ["Jeevana", "Programmer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const target = document.getElementById("typewriter");
  const typeSpeed = 150;
  const eraseSpeed = 100;
  const delayBetweenWords = 1500;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? eraseSpeed : typeSpeed);
    }
  }

  type();
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelectorAll(".nav-link");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    if (navMenu.classList.contains("open")) {
      menuIcon.className = "fa-solid fa-xmark";
    } else {
      menuIcon.className = "fa-solid fa-bars";
    }
  });

  // Close menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuIcon.className = "fa-solid fa-bars";
    });
  });
}

// About Tabs Switching
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and panes
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      // Add active class to clicked button and target pane
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });
}

// Projects Filter & Render
function initProjectsFilter() {
  const grid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".tag-btn");

  function renderProjects(filter) {
    grid.innerHTML = "";
    const filtered = projectsData.filter(p => p.tag.includes(filter));

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'">
          <div class="project-overlay">
            <a href="${project.gitUrl}" class="overlay-link" target="_blank" aria-label="GitHub Repository">
              <i class="fa-solid fa-code"></i>
            </a>
            <a href="${project.previewUrl}" class="overlay-link" target="_blank" aria-label="Live Demo">
              <i class="fa-solid fa-eye"></i>
            </a>
          </div>
        </div>
        <div class="project-details">
          <h5 class="project-title">${project.title}</h5>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Handle click on filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  // Initial Render (All)
  renderProjects("All");
}

// EmailJS Form Handling
function initEmailJS() {
  // Initialize EmailJS
  emailjs.init({
    publicKey: "A_hy2jDKQCF3o5Jls"
  });

  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success-msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector(".btn-submit");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      emailjs.sendForm('service_nkyznbn', 'template_sk55a7x', form)
        .then((result) => {
          console.log("Email successfully sent:", result.text);
          form.reset();
          successMsg.classList.remove("hidden");
          setTimeout(() => {
            successMsg.classList.add("hidden");
          }, 5000);
        }, (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send the message. Please try again later.");
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        });
    });
  }
}
