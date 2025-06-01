document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const toggleButton = document.getElementById("darkModeToggle");

    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️"; 

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      toggleButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    const elementsToAnimate = document.querySelectorAll(
      ".about-section, .skills, .projects, .timeline, .footer"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    elementsToAnimate.forEach((el) => observer.observe(el));

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
  
    document.querySelectorAll(".project-card img").forEach((img) => {
      img.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    ;
    const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".project-card img").forEach(img => {
    img.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
});