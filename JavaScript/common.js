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
