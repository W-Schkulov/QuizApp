const userLoggedIn = true;

document.addEventListener("DOMContentLoaded", function () {
  const profileLink = document.querySelector(
    ".navigation__list li:nth-child(3) a"
  );

  if (userLoggedIn) {
    profileLink.href = "profile.html";
  } else {
    profileLink.href = "login.html";
    profileLink.textContent = "Login / Register";
  }
});
