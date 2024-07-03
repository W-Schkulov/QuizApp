//darkmode bzw bei mir lightmode//

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeSwitch = document.querySelector('[data-js="switch-darkmode"]');

const isLightMode = localStorage.getItem("lightMode") === "true";
if (isLightMode) {
  bodyElement.classList.add("light-mode");
  if (darkModeSwitch) {
    darkModeSwitch.checked = true;
  }
}

if (darkModeSwitch) {
  darkModeSwitch.addEventListener("change", () => {
    bodyElement.classList.toggle("light-mode");
    localStorage.setItem("lightMode", darkModeSwitch.checked);
  });
}

//AnswerButton //

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("answer__button")) {
    const button = event.target;
    const answer = button.nextElementSibling;
    if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block";
      button.textContent = "Hide Answer";
    } else {
      answer.style.display = "none";
      button.textContent = "Show Answer";
    }
  }
});

//bookmarks//
const bookmarkButton1 = document.querySelector(".card__bookmark1");

bookmarkButton1.addEventListener("click", function () {
  bookmarkButton1.classList.toggle("active");
});

//forms
