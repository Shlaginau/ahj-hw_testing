export default function cardPaymentSystem(cardNumber) {
  const number = String(cardNumber).replace(/[^\d]/g, "");

  if (/^4(\d{12}|\d{15}|\d{18})$/.test(number)) {
    return "visa";
  }
  if (
    /^(5[1-5]\d{14}|2(22[1-9]|2[3-9]\d|3[0-6]\d|7[01])\d{12})$/.test(number)
  ) {
    return "mastercard";
  }
  if (/^3[47]\d{13}$/.test(number)) {
    return "amex";
  }
  if (
    /^6(?:011|5\d{2}|4[4-9]\d|22(?:1[2-9]|[2-8]\d|9[0-5]))\d{12,16}$/.test(
      number,
    )
  ) {
    return "discover";
  }
  if (/^35(?:2[8-9]|[3-8]\d)\d{12,16}$/.test(number)) {
    return "jcb";
  }
  if (/^3(?:0[0-5]|[68]\d)\d{11,14}$/.test(number)) {
    return "dinersclub";
  }
  if (/^(220[0-4])\d{12,15}$/.test(number)) {
    return "mir";
  }

  return "unknown";
}
