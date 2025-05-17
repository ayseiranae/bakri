function explore() {
  window.scrollTo({
    top: document.querySelector(".content").offsetTop,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const joinButtons = document.querySelectorAll(".join-btn");
  joinButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const topicTitle =
        this.parentElement.querySelector(".topic-title").textContent;
      alert(`You are joining the discussion: ${topicTitle}`);
    });
  });

  const editProfileBtn = document.querySelector(".edit-profile-btn");
  editProfileBtn.addEventListener("click", function () {
    alert("Edit profile functionality will be implemented here.");
  });

  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") {
        e.preventDefault();
        const linkText = this.textContent;
        alert(`Navigating to ${linkText} page...`);
      }
    });
  });
});
