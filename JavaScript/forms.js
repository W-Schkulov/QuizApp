const form = document.querySelector('[data-js="quiz-form"]');
const cardList = document.querySelector('[data-js="card__list"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataEntries = Object.fromEntries(formData.entries());
  const { question, answer, tag } = formDataEntries;

  const newCard = document.createElement("li");

  newCard.innerHTML = `
    <article class="card">
      <h2>${question}</h2>
      <button class="answer__button" data-js="answer-button">Show Answer</button>
      <p class="answer" style="display: none">${answer}</p>
      <ul class="tag-list">
        <li class="tag">#${tag}</li>
      </ul>
      <button class="card__bookmark1">
        <i class="fas fa-bookmark"></i>
      </button>
    </article>
  `;
  cardList.appendChild(newCard);
});
