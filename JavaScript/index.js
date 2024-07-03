//darkmode bzw bei mir lightmode//

function LightModeToggle(bodySelector, switchSelector) {
  const bodyElement = document.querySelector(bodySelector);
  const darkModeSwitch = document.querySelector(switchSelector);

  if (darkModeSwitch) {
    if (darkModeSwitch.checked) {
      bodyElement.classList.add("light-mode");
    }

    darkModeSwitch.addEventListener("change", () => {
      bodyElement.classList.toggle("light-mode", darkModeSwitch.checked);
    });
  }
}

LightModeToggle('[data-js="body"]', '[data-js="switch-darkmode"]');

//AnswerButton function //

function toggleAnswer(event) {
  const isAnswerButton = event.target.classList.contains("answer__button");
  if (isAnswerButton) {
    const button = event.target;
    const answer = button.nextElementSibling;
    const isAnswerHidden =
      answer.style.display === "none" || !answer.style.display;

    if (isAnswerHidden) {
      answer.style.display = "block";
      button.textContent = "Hide Answer";
    } else {
      answer.style.display = "none";
      button.textContent = "Show Answer";
    }
  }
}

document.body.addEventListener("click", toggleAnswer);

//bookmarks//
function addBookmarkToggleListener(buttonSelector) {
  const bookmarkButton = document.querySelector(buttonSelector);

  if (bookmarkButton) {
    bookmarkButton.addEventListener("click", function () {
      bookmarkButton.classList.toggle("active");
    });
  }
}
addBookmarkToggleListener(".card__bookmark1");
addBookmarkToggleListener(".card__bookmark2");
addBookmarkToggleListener(".card__bookmark3");

//forms
