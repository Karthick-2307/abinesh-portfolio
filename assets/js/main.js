/**
 * Abinesh Karthick K - Developer Portfolio
 * Main Interactive Controller (ES6 Vanilla JS)
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initHeroParticles();
  initProjects();
  initContactForm();
  initBackToTop();
  initYear();
  initScrollAnimations();
});

/* ==========================================================================
   1. Theme Management (Dark Default + Light Toggle)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("ak_theme");
  
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    // Default to dark theme as requested
    document.documentElement.setAttribute("data-theme", "dark");
  }

  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ak_theme", next);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  const iconSun = document.querySelector(".theme-icon-sun");
  const iconMoon = document.querySelector(".theme-icon-moon");

  if (iconSun && iconMoon) {
    if (isLight) {
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
    } else {
      iconSun.style.display = "block";
      iconMoon.style.display = "none";
    }
  }
}

/* ==========================================================================
   2. Sticky Navigation, Mobile Menu & Active Section Observer
   ========================================================================== */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header blur effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.classList.toggle("active", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Active section indicator via IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. Subtle Canvas Ambient Particle Background
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener("resize", () => {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particleCount = Math.min(Math.floor(width / 35), 40);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(139, 92, 246, 0.45)" : "rgba(6, 182, 212, 0.45)"
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Subtle connecting lines for nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 90) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 90)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   4. Projects Rendering, Category Filters & GitHub API Handler
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  let activeFilter = "all";

  // Render cards
  function renderProjects(filter) {
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = (window.VERIFIED_PROJECTS || []).filter(proj => {
      if (filter === "all") return true;
      if (filter === "python") return proj.category.includes("python");
      if (filter === "java") return proj.category.includes("java");
      if (filter === "web") return proj.category.includes("web");
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-projects">
          <p>No projects found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(proj => {
      const card = createProjectCard(proj);
      grid.appendChild(card);
    });
  }

  function createProjectCard(proj) {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-category", proj.category);

    const techTagsHtml = proj.technologies
      .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
      .join("");

    const highlightsHtml = proj.highlights
      ? proj.highlights.map(h => `<li><span class="bullet">▹</span> ${escapeHtml(h)}</li>`).join("")
      : "";

    // Card visual header with code/project badge
    const headerGraphic = getProjectGraphic(proj.category);

    card.innerHTML = `
      <div class="project-header-graphic">
        ${headerGraphic}
        <span class="project-category-badge">${escapeHtml(proj.categoryLabel)}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${escapeHtml(proj.title)}</h3>
        <p class="project-description">${escapeHtml(proj.description)}</p>
        ${highlightsHtml ? `<ul class="project-highlights">${highlightsHtml}</ul>` : ""}
        <div class="project-tech-list">
          ${techTagsHtml}
        </div>
        <div class="project-links">
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View ${escapeHtml(proj.title)} on GitHub">
            <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub Repository</span>
          </a>
          ${proj.liveUrl ? `
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="View live demo of ${escapeHtml(proj.title)}">
              <svg class="icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          ` : `
            <span class="repo-badge">
              <span class="status-dot"></span> Source Code Ready
            </span>
          `}
        </div>
      </div>
    `;

    return card;
  }

  function getProjectGraphic(category) {
    if (category.includes("python")) {
      return `
        <div class="graphic-code-preview">
          <div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
          <pre class="code-snippet"><code>def analyze_integrity(src_file):
    tokens = tokenize(src_file)
    return compute_similarity(tokens)</code></pre>
        </div>
      `;
    } else if (category.includes("java")) {
      return `
        <div class="graphic-code-preview">
          <div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
          <pre class="code-snippet"><code>public class ReservationManager {
    public Booking bookRoom(Guest guest, Room room) {
        return db.saveTransaction(booking);
    }
}</code></pre>
        </div>
      `;
    } else {
      return `
        <div class="graphic-code-preview">
          <div class="code-dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
          <pre class="code-snippet"><code>const reportItem = async (payload) => {
    return await api.post('/items', payload);
};</code></pre>
        </div>
      `;
    }
  }

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderProjects(activeFilter);
    });
  });

  // Initial render
  renderProjects("all");

  // GitHub Dynamic API verification
  if (typeof window.fetchGitHubData === "function") {
    const statusNotice = document.getElementById("github-status-notice");
    window.fetchGitHubData().then(result => {
      if (result.success && result.user) {
        if (statusNotice) {
          statusNotice.innerHTML = `
            <span class="gh-sync-badge">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              GitHub Live Synced: <strong>${result.user.public_repos}</strong> Public Repositories Verified
            </span>
          `;
        }
      }
    });
  }
}

/* ==========================================================================
   5. Contact Form (Client Validation + Transparent Mailto Direct Routing)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const subject = form.elements["subject"].value.trim();
    const message = form.elements["message"].value.trim();

    // Validation
    if (!name || !email || !subject || !message) {
      showStatus("Please fill in all required fields.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    // Since this is a client-side portfolio without an unconfigured secret backend,
    // we use transparent direct email delivery via mailto with prefilled details.
    const recipient = "abineshkarthick03@gmail.com";
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Abinesh,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via portfolio contact form`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    showStatus(
      `Opening your default email application to deliver message directly to ${recipient}... If your client didn't open automatically, <a href="${mailtoUrl}" class="status-link">click here to send email</a>.`,
      "success"
    );

    // Launch email application
    window.location.href = mailtoUrl;

    // Reset form after short delay
    setTimeout(() => {
      form.reset();
    }, 2000);
  });

  function showStatus(msg, type) {
    if (!formStatus) return;
    formStatus.className = `form-status ${type}`;
    formStatus.innerHTML = msg;
    formStatus.style.display = "block";
  }
}

/* ==========================================================================
   6. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================================
   7. Dynamic Year in Footer
   ========================================================================== */
function initYear() {
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   8. Intersection Observer for Smooth Section Entrances
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
}

/* Helper to prevent XSS in dynamic renders */
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
