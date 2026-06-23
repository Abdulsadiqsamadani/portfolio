document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close-btn");
  const nav = document.querySelector(".mobile_navbar_li");

  const navLinks = document.querySelectorAll(".mobile_navbar_li a");

  menuBtn.addEventListener("click", () => {
    nav.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
  const projectsData = [
    {
      id: 1,
      name: "UDUS TECH-SUMMIT",
      description:
        "A clean, responsive event landing page built for the UDUS Tech Summit 2026 to showcase, organize, and streamline the summit's core tech activities. Designed to reduce information overload and eliminate scheduling clutter for attendees, the platform structures dense event information into a high-efficiency user interface. It features a minimalist main program timeline highlighting key tracks—including hands-on workshops, engineering lectures, and tech forums—ensuring a seamless, friction-free navigation experience for virtual and in-person participants at the UDUS Innovation Hub.",
      featuredImage: "assets/capstone-project1.png",
      technologies: ["Version Control", "CSS", "JavaScript", "HTML"],
      liveLink: "https://abdulsadiqsamadani.github.io/Event-identify-web/",
      sourceLink:
        "https://github.com/Abdulsadiqsamadani/Event-identify-web.git",
    },
    {
      id: 2,
      name: "Multi-Post Stories Gain + Glory",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      featuredImage: "assets/capstone-project1.png",
      technologies: ["CSS", "JavaScript", "HTML"],
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 3,
      name: "Multi-Post Stories Gain + Glory",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 4,
      name: "Multi-Post Stories Gain + Glory",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      featuredImage: "assets/project4.png",
      technologies: ["CSS", "JavaScript", "HTML"],
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 5,
      name: "Multi-Post Stories Gain + Glory",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      featuredImage: "assets/project5.png",
      technologies: ["CSS", "JavaScript", "HTML"],
      liveLink: "#",
      sourceLink: "#",
    },
    {
      id: 6,
      name: "Multi-Post Stories Gain + Glory",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
      featuredImage: "assets/project6.png",
      technologies: ["CSS", "JavaScript", "HTML"],
      liveLink: "#",
      sourceLink: "#",
    },
  ];
  const projectsGrid = document.getElementById("projects-grid");

  function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = "";

    projectsData.forEach((project) => {
      const techList = project.technologies
        .map((tech) => `<li>${tech}</li>`)
        .join("");

      const html = `
        <div class="project">
          <div class="placeholder" style="background-image: url('${project.featuredImage}'); background-size: cover; background-position: center;"></div>
          <div class="project-container">
            <h3>${project.name}</h3>
            <ul class="tags">${techList}</ul>
            <button class="btn see-project-trigger" data-id="${project.id}">
              See project
            </button>
          </div>
        </div>
      `;
      projectsGrid.insertAdjacentHTML("beforeend", html);
    });
  }

  renderProjects();
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close"); // Matches HTML ID element
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDesc = document.getElementById("modal-description");
  const modalTags = document.getElementById("modal-tags");
  const modalLive = document.getElementById("modal-live");
  const modalSource = document.getElementById("modal-source");

  function openModal(id) {
    const project = projectsData.find((p) => p.id === id);
    if (!project || !modal) return;

    modalTitle.textContent = project.name;
    modalImage.src = project.featuredImage;
    modalDesc.textContent = project.description;
    modalLive.href = project.liveLink;
    modalSource.href = project.sourceLink;

    modalTags.innerHTML = project.technologies
      .map((t) => `<li>${t}</li>`)
      .join("");

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevents background body scrolling
  }

  function closeModalFunc() {
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  }
  if (projectsGrid) {
    projectsGrid.addEventListener("click", (e) => {
      if (e.target.classList.contains("see-project-trigger")) {
        openModal(e.target.dataset.id);
      }
    });
  }
  if (modalClose) {
    modalClose.addEventListener("click", closeModalFunc);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModalFunc();
    });
  }

  const contactForm = document.querySelector(".contact-form");
  const emailInput = document.getElementById("contact-email");
  const emailError = document.getElementById("email-error");

  if (contactForm && emailInput && emailError) {
    contactForm.addEventListener("submit", (e) => {
      const emailValue = emailInput.value;

      if (emailValue !== emailValue.toLowerCase()) {
        e.preventDefault();
        emailError.textContent =
          "Error: Please submit your email in all lowercase letters.";
      } else {
        emailError.textContent = "";

      }
    });
  }

  const nameInput = document.getElementById('name');
  const msgInput = document.getElementById('msg');

  if (contactForm && nameInput && emailInput && msgInput) {
    const STORAGE_KEY = 'portfolio_contact_form_data';

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      nameInput.value = parsedData.name || '';
      emailInput.value = parsedData.email || '';
      msgInput.value = parsedData.message || '';
    }

    contactForm.addEventListener('input', () => {
      const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: msgInput.value,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    });

    contactForm.addEventListener('submit', () => {
      if (emailInput.value === emailInput.value.toLowerCase()) {
        localStorage.removeItem(STORAGE_KEY);

      }
    });
  }
});
