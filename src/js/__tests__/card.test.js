import cardPaymentSystem from "../card";

describe("cardPaymentSystem", () => {
  test("Определение карты Visa", () => {
    const visaCard = "4485138141056251917";
    expect(cardPaymentSystem(visaCard)).toBe("visa");
  });

  test("Определение карты Mastercard", () => {
    const mastercard = "5339684540098573";
    expect(cardPaymentSystem(mastercard)).toBe("mastercard");
  });

  test("Определение карты AmericanExpress", () => {
    const amex = "379067924636360";
    expect(cardPaymentSystem(amex)).toBe("amex");
  });

  test("Определение карты Discover", () => {
    const discover = "6011929461171955";
    expect(cardPaymentSystem(discover)).toBe("discover");
  });

  test("Определение карты Dinersclub", () => {
    const dinersclub = "36212958410507";
    expect(cardPaymentSystem(dinersclub)).toBe("dinersclub");
  });

  test("Определение карты JSB", () => {
    const jcb = "3533060169379660";
    expect(cardPaymentSystem(jcb)).toBe("jcb");
  });

  test("Определение карты MIR", () => {
    const mir = "2202200273752202";
    expect(cardPaymentSystem(mir)).toBe("mir");
  });

  test("Определение неизвестной карты", () => {
    const unknownCard = "1234567890123456";
    expect(cardPaymentSystem(unknownCard)).toBe("unknown");
  });
});
