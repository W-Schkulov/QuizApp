document.querySelectorAll(".answer__button").forEach((button) => {
  button.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block";
      button.textContent = "Hide Answer";
    } else {
      answer.style.display = "none";
      button.textContent = "Show Answer";
    }
  });
});
