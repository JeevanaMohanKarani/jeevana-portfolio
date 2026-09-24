/**
 * JEEVANA KARANI - PORTFOLIO INTERACTIVITY
 * Clean Vanilla JavaScript
 */

// Additional Projects Data
const additionalProjects = [
  {
    id: 1,
    title: "Driving School Web Platform",
    category: "web",
    categoryLabel: "Web & Full Stack",
    description: "Full-stack booking and scheduling application for driving institutions with student progress tracking and test slot management.",
    tech: ["JavaScript", "HTML5", "CSS3", "Backend"],
    gitUrl: "https://github.com/JeevanaMohanKarani/Driving-School"
  },
  {
    id: 2,
    title: "Explainable AI Customer Churn",
    category: "ai",
    categoryLabel: "Machine Learning / XAI",
    description: "Predictive classification model paired with SHAP/LIME feature importance to explain factors driving subscriber attrition.",
    tech: ["Python", "scikit-learn", "XAI", "Pandas"],
    gitUrl: "https://github.com/JeevanaMohanKarani/explainable-ai-churn"
  },
  {
    id: 3,
    title: "Exploratory Data Analysis Suite",
    category: "iot",
    categoryLabel: "Data Analytics",
    description: "Statistical distributions, correlation matrices, and automated outlier detection pipelines on multivariate business datasets.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    gitUrl: "https://github.com/JeevanaMohanKarani"
  },
  {
    id: 4,
    title: "Cloud Telemetry & Sensor Logger",
    category: "iot",
    categoryLabel: "IoT / Cloud",
    description: "Microcontroller telemetry ingestion pipeline streaming sensor parameters to cloud storage with automated anomaly alerts.",
    tech: ["IoT", "AWS Cloud", "Java", "C++"],
    gitUrl: "https://github.com/JeevanaMohanKarani"
  },
  {
    id: 5,
    title: "Algorithm & Data Structures Toolkit",
    category: "web",
    categoryLabel: "Core Algorithms",
    description: "High-performance implementations of graph traversals, dynamic programming algorithms, and custom memory trees in C & Java.",
    tech: ["C Language", "Java", "Data Structures"],
    gitUrl: "https://github.com/JeevanaMohanKarani"
  },
  {
    id: 6,
    title: "MATLAB Computational Modeling",
    category: "ai",
    categoryLabel: "Computational Modeling",
    description: "Signal processing, matrix calculus, and mathematical simulation scripts completed under MathWorks Onramp certifications.",
    tech: ["MATLAB", "Linear Algebra", "Simulations"],
    gitUrl: "https://github.com/JeevanaMohanKarani"
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileMenu();
  initProjectsFilter();
  initCopyEmail();
  initContactForm();
  initScrollHighlight();
});

/* --- Theme Toggle (Dark / Light) --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem("jk_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme, themeIcon);

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("jk_theme", nextTheme);
    updateThemeIcon(nextTheme, themeIcon);
  });
}

function updateThemeIcon(theme, iconElement) {
  if (!iconElement) return;
  if (theme === "light") {
    iconElement.className = "fa-solid fa-sun";
  } else {
    iconElement.className = "fa-solid fa-moon";
  }
}

/* --- Mobile Menu Drawer --- */
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("open");
      }
    });
  });
}

/* --- Additional Projects Filtering --- */
function initProjectsFilter() {
  const grid = document.getElementById("more-projects-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  
  if (!grid) return;

  function renderProjects(filter = "all") {
    const filtered = filter === "all" 
      ? additionalProjects 
      : additionalProjects.filter(p => p.category === filter);

    grid.innerHTML = "";

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "mini-project-card";
      
      const techBadges = project.tech.map(t => `<span class="tech-pill">${t}</span>`).join(" ");

      card.innerHTML = `
        <div class="mini-card-top">
          <span class="mini-card-category">${project.categoryLabel}</span>
          <h4 class="mini-card-title">${project.title}</h4>
          <p class="mini-card-desc">${project.description}</p>
        </div>
        <div class="project-tech-tags" style="margin-bottom: 1rem;">
          ${techBadges}
        </div>
        <div class="mini-card-bottom">
          <a href="${project.gitUrl}" target="_blank" rel="noopener noreferrer" class="mini-link">
            <span>Repository</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Initial render
  renderProjects("all");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.getAttribute("data-filter");
      renderProjects(filter);
    });
  });
}

/* --- Copy Email to Clipboard --- */
function initCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  const copyIcon = document.getElementById("copy-icon");
  const copyText = document.getElementById("copy-text");
  const email = "jeevanakaranim@gmail.com";

  if (!copyBtn) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyIcon.className = "fa-solid fa-check";
      copyText.textContent = "Copied!";
      copyBtn.style.backgroundColor = "var(--accent-primary)";
      copyBtn.style.color = "#0B0C10";

      setTimeout(() => {
        copyIcon.className = "fa-regular fa-copy";
        copyText.textContent = "Copy";
        copyBtn.style.backgroundColor = "";
        copyBtn.style.color = "";
      }, 2000);
    } catch (err) {
      // Fallback
      window.location.href = `mailto:${email}`;
    }
  });
}

/* --- Contact Form Handling --- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      if (status) {
        status.className = "form-status error";
        status.textContent = "Please fill in all fields.";
      }
      return;
    }

    // Compose mailto link
    const mailtoLink = `mailto:jeevanakaranim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    
    if (status) {
      status.className = "form-status success";
      status.textContent = "Opening your email client to send...";
    }

    setTimeout(() => {
      window.location.href = mailtoLink;
      form.reset();
    }, 600);
  });
}

/* --- Scroll Spy Navigation Highlight --- */
function initScrollHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
