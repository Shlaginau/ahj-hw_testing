import validateCreditCardNumber from "./validate";
import cardPaymentSystem from "./card";

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector(".btn");
  const cards = document.querySelectorAll(".card");
  const cardInput = document.querySelector(".form-control");

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const cardNumber = cardInput.value;
    const cardType = cardPaymentSystem(cardNumber);

    cards.forEach((card) => {
      card.classList.remove("disabled");
    });

    cards.forEach((card) => {
      if (!card.classList.contains(cardType)) {
        card.classList.add("disabled");
      }
    });

    if (validateCreditCardNumber(cardNumber)) {
      submit.classList.add("btn-success");
    } else {
      submit.classList.add("btn-failure");
    }
  });

  cardInput.addEventListener("click", () => {
    cards.forEach((card) => {
      card.classList.remove("disabled");
    });
    submit.classList.remove("btn-success");
    submit.classList.remove("btn-failure");
  });
});
