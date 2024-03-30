import validateCreditCardNumber from "../validate";

describe("validateCreditCardNumber", () => {
  test("Валидный номер карты Visa", () => {
    const validVisaCard = "4485138141056251917";
    expect(validateCreditCardNumber(validVisaCard)).toBe(true);
  });

  test("Невалидный номер карты", () => {
    const invalidCard = "1234567890123456";
    expect(validateCreditCardNumber(invalidCard)).toBe(false);
  });
});
