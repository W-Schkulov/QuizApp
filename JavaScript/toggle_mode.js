const bodyElement = document.querySelector('[data-js="body"]');
const modeToggleButton = document.querySelector('[data-js="mode-toggle"]');
const modeIcon = document.querySelector('[data-js="mode-icon"]');

modeToggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("light-mode");

  if (bodyElement.classList.contains("light-mode")) {
    modeIcon.textContent = "🌞";
  } else {
    modeIcon.textContent = "🌙";
  }
});
