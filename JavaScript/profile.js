document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.querySelector('[data-js="mode-toggle"]');
  const modeIcon = document.querySelector('[data-js="mode-icon"]');
  const body = document.querySelector('[data-js="body"]');

  modeToggle.addEventListener("click", () => {
    // Toggle dark mode class on body
    body.classList.toggle("dark-mode");

    // Change the icon based on the current mode
    if (body.classList.contains("dark-mode")) {
      modeIcon.textContent = "☀️"; // Sun icon for light mode
    } else {
      modeIcon.textContent = "🌙"; // Moon icon for dark mode
    }
  });

  // Optional: Remember the mode using localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    modeIcon.textContent = "☀️";
  }

  modeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });
});
