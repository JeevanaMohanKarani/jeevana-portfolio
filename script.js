// Project Data
const projectsData = [
  {
    id: 1,
    title: "Car Damage Detection using CNN",
    image: "./images/projects/cnn-car.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/JeevanaMohanKarani/Car-damage-detection-using-CNN",
    previewUrl: "https://github.com/JeevanaMohanKarani/Car-damage-detection-using-CNN"
  },
  {
    id: 2,
    title: "Computer Vision Object Detection",
    image: "./images/projects/object-detection.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/JeevanaMohanKarani/computer-vision-object-detection",
    previewUrl: "https://github.com/JeevanaMohanKarani/computer-vision-object-detection"
  },
  {
    id: 3,
    title: "Android Water Monitoring IoT App",
    image: "./images/projects/water-monitoring.png",
    tag: ["All", "IoT"],
    gitUrl: "https://github.com/JeevanaMohanKarani/Android_Watermonitoring_IoTcloud_app",
    previewUrl: "https://github.com/JeevanaMohanKarani/Android_Watermonitoring_IoTcloud_app"
  },
  {
    id: 4,
    title: "Driving School Web Application",
    image: "./images/projects/driving-school.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JeevanaMohanKarani/Driving-School",
    previewUrl: "https://github.com/JeevanaMohanKarani/Driving-School"
  },
  {
    id: 5,
    title: "Explainable AI Customer Churn Predictor",
    image: "./images/projects/explainable-churn.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/JeevanaMohanKarani/explainable-ai-churn",
    previewUrl: "https://github.com/JeevanaMohanKarani/explainable-ai-churn"
  },
  {
    id: 6,
    title: "Generative AI Document RAG Chatbot",
    image: "./images/projects/rag-chatbot.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/JeevanaMohanKarani/rag-pdf-chatbot",
    previewUrl: "https://github.com/JeevanaMohanKarani/rag-pdf-chatbot"
  }
];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initMobileMenu();
  initTabs();
  initProjectsFilter();
  initEmailJS();
  initThemeToggle();
  initCommandPalette();
  initScrollHighlight();
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
    if (!target) return;
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

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      if (navMenu.classList.contains("open")) {
        menuIcon.className = "fa-solid fa-xmark";
      } else {
        menuIcon.className = "fa-solid fa-bars";
      }
    });
  }

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
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

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

  if (!grid) return;

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

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  renderProjects("All");
}

// EmailJS Form Handling
function initEmailJS() {
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

// Light/Dark Theme Switcher
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const html = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "light") {
      themeIcon.className = "fa-solid fa-sun";
    } else {
      themeIcon.className = "fa-solid fa-moon";
    }
  }
}

// Command Palette Navigation
function initCommandPalette() {
  const searchBtn = document.getElementById("search-btn");
  const palette = document.getElementById("cmd-palette");
  const input = document.getElementById("cmd-search-input");
  const resultsContainer = document.getElementById("cmd-results");
  let selectedIndex = -1;
  let visibleItems = [];

  // Command palette datasets
  const staticItems = [
    { title: "Navigate to About Section", type: "Section", action: () => scrollToSection("about"), icon: "fa-solid fa-user" },
    { title: "Navigate to Projects Section", type: "Section", action: () => scrollToSection("project"), icon: "fa-solid fa-code" },
    { title: "Navigate to Contact Section", type: "Section", action: () => scrollToSection("contact"), icon: "fa-solid fa-envelope" },
    { title: "Hire Me / Connect", type: "Action", action: () => scrollToSection("contact"), icon: "fa-solid fa-paper-plane" }
  ];

  function openPalette() {
    palette.classList.add("open");
    setTimeout(() => input.focus(), 50);
    search(input.value);
  }

  function closePalette() {
    palette.classList.remove("open");
    selectedIndex = -1;
  }

  if (searchBtn) searchBtn.addEventListener("click", openPalette);
  
  // Close triggers
  palette.addEventListener("click", (e) => {
    if (e.target === palette) closePalette();
  });

  window.addEventListener("keydown", (e) => {
    // Ctrl + K to toggle
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.classList.contains("open") ? closePalette() : openPalette();
    }
    // Escape to close
    if (e.key === "Escape") closePalette();

    // Arrow keys & Enter when palette is open
    if (palette.classList.contains("open")) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        navigateResults(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        navigateResults(-1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        triggerSelectedItem();
      }
    }
  });

  input.addEventListener("input", (e) => {
    search(e.target.value);
  });

  function search(query) {
    resultsContainer.innerHTML = "";
    selectedIndex = -1;
    visibleItems = [];

    // Filter static sections
    const filteredStatic = staticItems.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Filter projects
    const filteredProjects = projectsData.filter(project =>
      project.title.toLowerCase().includes(query.toLowerCase())
    ).map(project => ({
      title: project.title,
      type: "Project",
      action: () => window.open(project.previewUrl, "_blank"),
      icon: "fa-solid fa-arrow-up-right-from-square"
    }));

    visibleItems = [...filteredStatic, ...filteredProjects];

    if (visibleItems.length === 0) {
      resultsContainer.innerHTML = `<div class="cmd-no-results">No results found for "${query}"</div>`;
      return;
    }

    visibleItems.forEach((item, idx) => {
      const el = document.createElement("div");
      el.className = "cmd-item";
      el.innerHTML = `
        <i class="${item.icon}"></i>
        <span class="cmd-item-title">${item.title}</span>
        <span class="cmd-item-category">${item.type}</span>
      `;
      el.addEventListener("click", () => {
        item.action();
        closePalette();
      });
      resultsContainer.appendChild(el);
    });

    navigateResults(1); // Select the first element by default
  }

  function navigateResults(direction) {
    const items = resultsContainer.querySelectorAll(".cmd-item");
    if (items.length === 0) return;

    if (selectedIndex !== -1) {
      items[selectedIndex].classList.remove("selected");
    }

    selectedIndex += direction;
    if (selectedIndex >= items.length) selectedIndex = 0;
    if (selectedIndex < 0) selectedIndex = items.length - 1;

    items[selectedIndex].classList.add("selected");
    items[selectedIndex].scrollIntoView({ block: "nearest" });
  }

  function triggerSelectedItem() {
    if (selectedIndex !== -1 && visibleItems[selectedIndex]) {
      visibleItems[selectedIndex].action();
      closePalette();
    }
  }

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

// Side Dot Highlight on Scroll
function initScrollHighlight() {
  const sections = document.querySelectorAll("header, section");
  const dots = document.querySelectorAll(".dot");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute("id");
      }
    });

    dots.forEach(dot => {
      dot.classList.remove("active");
      if (dot.getAttribute("data-target") === current) {
        dot.classList.add("active");
      }
    });
  });
}
