export default function validateCreditCardNumber(cardNumber) {
  cardNumber = cardNumber
    .replace(/[^\d]/g, "")
    .split("")
    .reverse()
    .map((x) => parseInt(x, 10));

  let sum = 0;
  for (let i = 0; i < cardNumber.length; i += 1) {
    let digit = cardNumber[i];

    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}
