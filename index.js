document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const cardsContainer = document.querySelector(".cards");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      let isShowing = false;

      if (card.classList.contains("show")) {
        isShowing = true;
      }

      if (cardsContainer.classList.contains("showing")) {
        document.querySelector(".card.show").classList.remove("show");
        if (isShowing) {
          cardsContainer.classList.remove("showing");
        } else {
          card.classList.add("show");
        }
      } else {
        cardsContainer.classList.add("showing");
        card.classList.add("show");
      }
    });
  });
});
