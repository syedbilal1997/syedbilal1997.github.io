const projectDetails = {
  adnoc: {
    domain: "Energy / Project Management",
    title: "ADNOC Project Management Platform",
    copy:
      "Built a centralized project management solution using model-driven apps, custom PCF controls, Power Automate, Copilot agents and Adaptive Cards for task reminders, approvals and operational visibility.",
    tags: ["Dynamics 365", "Model-driven Apps", "PCF Controls", "Copilot Studio", "Power Automate"],
  },
  adcb: {
    domain: "Banking / Core Automation",
    title: "ADCB Core Banking Automation",
    copy:
      "Automated core banking department processes with Dynamics 365, model-driven apps, Power Automate, SAP integration, HR applications, canvas apps and invoice-focused Copilot support.",
    tags: ["Banking", "Dataverse", "SAP Integration", "Canvas Apps", "Copilot Agents"],
  },
  emirates: {
    domain: "Aviation / Internal Operations",
    title: "Emirates Volunteering Management",
    copy:
      "Delivered a volunteering system for missions and internal resources, supporting registrations, approvals, notifications, event allocation and participation tracking.",
    tags: ["Canvas Apps", "Power Automate", "Approvals", "Reporting"],
  },
  amkor: {
    domain: "Operations / Innovation",
    title: "AMKOR Innovation and Operations Apps",
    copy:
      "Created multiple canvas apps and Power Pages experiences with Dataverse virtual tables, SharePoint data sources, reusable templates and modern autonomous Copilot agents.",
    tags: ["Power Pages", "SharePoint", "Virtual Tables", "Copilot Studio"],
  },
  growdash: {
    domain: "Analytics / AI",
    title: "GrowDash Analytical Dashboard",
    copy:
      "Architected an analytics and recommendation product for UAE food-tech aggregator data, aligning customer requirements with technical solution design and backend delivery.",
    tags: ["Power BI", "React", "Node.js", "NestJS", "GCP", "AI Agents"],
  },
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];

const activeNavObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => activeNavObserver.observe(section));

const filters = [...document.querySelectorAll(".filter")];
const projectCards = [...document.querySelectorAll(".project-card")];

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");

    const value = filter.dataset.filter;
    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const show = value === "all" || categories.includes(value);
      card.classList.toggle("is-hidden", !show);
    });
  });
});

const canHover = window.matchMedia("(hover: hover)").matches;

if (canHover) {
  projectCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -7;
      const rotateY = ((x / rect.width) - 0.5) * 7;
      card.style.transform = `perspective(850px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

const modal = document.querySelector(".project-modal");
const modalDomain = document.querySelector("#modal-domain");
const modalTitle = document.querySelector("#modal-title");
const modalCopy = document.querySelector("#modal-copy");
const modalTags = document.querySelector("#modal-tags");

function openModal(projectId) {
  const detail = projectDetails[projectId];
  if (!detail) return;

  modalDomain.textContent = detail.domain;
  modalTitle.textContent = detail.title;
  modalCopy.textContent = detail.copy;
  modalTags.innerHTML = detail.tags.map((tag) => `<span>${tag}</span>`).join("");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close")?.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

/* ===== Blog posts (Writing section) =====
   Hashnode's free GraphQL API was retired (now a paid offering) and the RSS feed
   sits behind a Cloudflare challenge, so a live client-side feed isn't possible
   without a paid API key. Posts are therefore curated here: add a new entry to
   the top of this array when you publish, and the Writing section rebuilds itself.
   (If you later get a Hashnode API key, this is the single place to swap in a fetch.) */
const blogConfig = {
  url: "https://syedbilal365.hashnode.dev",
  posts: [
    {
      title: "SmartLookup — how I taught a PCF to read your Quick View Forms",
      brief:
        "Drop on any Dataverse lookup. Hover. The card auto-pulls fields from the related entity's Quick View Form — zero per-PCF configuration.",
      url: "https://syedbilal365.hashnode.dev/smartlookup-how-i-taught-a-pcf-to-read-your-quick-view-forms",
      category: "PCF · Open Source",
      date: "Jun 9, 2026",
      readTime: "6 min read",
      cover: "https://raw.githubusercontent.com/syedbilal1997/SmartLookup-PCF/main/docs/screenshots/hero.png",
    },
    {
      title: "LiquidProgress — a modern visual for model-driven Power Apps",
      brief:
        "A PCF control that turns plain percentage fields into an animated liquid sphere — with smart due dates, owner avatars, and option-set status colours.",
      url: "https://syedbilal365.hashnode.dev/liquidprogress-a-modern-visual-for-model-driven-power-apps",
      category: "PCF · Open Source",
      date: "Jun 6, 2026",
      readTime: "6 min read",
      cover: "https://cdn.hashnode.com/uploads/covers/6a1d06659bd008b40d133823/ddcaa920-efe0-4cab-933f-d4cd202dddae.jpg",
    },
    {
      title: "PCF repo structure for clean GitHub releases (step by step)",
      brief:
        "A simple step-by-step guide to structuring a PCF control repo and shipping a managed solution zip to GitHub Releases.",
      url: "https://syedbilal365.hashnode.dev/how-i-structure-a-pcf-repo-for-clean-github-releases",
      category: "PCF · Power Platform",
      date: "Jun 2, 2026",
      readTime: "4 min read",
      cover: "https://cdn.hashnode.com/uploads/covers/6a1d06659bd008b40d133823/3de63217-8d7f-48b5-923a-9425149bc3a5.jpg",
    },
    {
      title: "Build your first PCF control: a model-driven field control from scratch",
      brief:
        "A complete beginner's guide to building a PCF field control for model-driven Power Apps: set up, scaffold, code, test, and deploy to Dataverse.",
      url: "https://syedbilal365.hashnode.dev/build-your-first-pcf-control-a-model-driven-field-control-from-scratch",
      category: "PCF · Tutorial",
      date: "Jun 1, 2026",
      readTime: "7 min read",
      cover: "https://syedbilal365.hashnode.dev/api/og/post?og=eyJhdXRob3IiOiJTeWVkJTIwQmlsYWwlMjBBaG1lZCIsImlzRGVmYXVsdE1vZGVEYXJrIjpmYWxzZSwicmVhZFRpbWUiOjcsImNvbW1lbnRzIjowLCJyZWFjdGlvbnMiOjAsImRvbWFpbiI6InN5ZWRiaWxhbDM2NS5oYXNobm9kZS5kZXYiLCJ0aXRsZSI6IkJ1aWxkJTIwWW91ciUyMEZpcnN0JTIwUENGJTIwQ29udHJvbCUzQSUyMEElMjBNb2RlbC1Ecml2ZW4lMjBGaWVsZCUyMENvbnRyb2wlMjBGcm9tJTIwU2NyYXRjaCIsInBob3RvIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzcwMTM0OTA4P3Y9NCIsImxvZ28iOiJodHRwczovL2Nkbi5oYXNobm9kZS5jb20vcmVzL2hhc2hub2RlL2ltYWdlL3VwbG9hZC92MTU5MzY4MDI4Mjg5Ni9rTkM3RThJUjQucG5nIiwiZmF2aWNvbiI6Imh0dHBzOi8vY2RuLmhhc2hub2RlLmNvbS9yZXMvaGFzaG5vZGUvaW1hZ2UvdXBsb2FkL3YxNTkzNjgwMjgyODk2L2tOQzdFOElSNC5wbmciLCJwdWJsaXNoZWRBdCI6IjIwMjYtMDYtMDFUMDQ6NDg6MjMuODU3WiIsInVwZGF0ZWRBdCI6IjIwMjYtMDYtMDFUMDQ6NDg6MjMuODU3WiJ9",
    },
  ],
};

(function renderBlog() {
  const grid = document.querySelector("#writing-grid");
  if (!grid || !blogConfig.posts.length) return;

  const escape = (str) =>
    String(str || "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const renderPost = (post) => {
    const cover = post.cover;
    const coverClass = cover ? "post-cover has-image" : "post-cover";
    const coverStyle = cover ? ` style="background-image:url('${encodeURI(cover)}')"` : "";
    const meta = [post.date, post.readTime]
      .filter(Boolean)
      .map((m) => `<span>${escape(m)}</span>`)
      .join("");
    return `
      <a class="post-card" href="${escape(post.url)}" target="_blank" rel="noreferrer">
        <div class="${coverClass}"${coverStyle}><span class="post-cat">${escape(post.category || "Blog")}</span></div>
        <div class="post-body">
          <h3>${escape(post.title)}</h3>
          <p>${escape(post.brief)}</p>
          <div class="post-meta">${meta}</div>
        </div>
      </a>`;
  };

  const ctaCard = `
    <div class="blog-cta">
      <h3>Bilal on Power Platform</h3>
      <p>Practical Dynamics 365, PCF, Copilot Studio &amp; Power Platform write-ups from real client delivery.</p>
      <a class="btn primary" href="${escape(blogConfig.url)}" target="_blank" rel="noreferrer">Visit the blog</a>
    </div>`;

  grid.innerHTML = blogConfig.posts.slice(0, 3).map(renderPost).join("") + ctaCard;
})();
