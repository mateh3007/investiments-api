import { InvestmentEntity, investmentProps } from "./investment.entity";

describe("Investment entity", () => {
  const investmentProps: investmentProps = {
    FLL: "AAAA",
    initialValue: 10,
    numberOfShares: 2,
  };

  it("Should able create an investment", () => {
    const investment = new InvestmentEntity(investmentProps);
    expect(investment).toEqual({
      ...investmentProps,
      finalValue: 20,
    });
  });

  it("Should change final value of entity", () => {
    const investment = new InvestmentEntity(investmentProps);
    investment.updateNumberOfShares(3);

    expect(investment).toEqual({
      FLL: "AAAA",
      initialValue: 10,
      numberOfShares: 3,
      finalValue: 30,
    });
  });

  it("Should change final value of entity", () => {
    const investment = new InvestmentEntity(investmentProps);
    investment.updateInitialValue(30);

    expect(investment).toEqual({
      FLL: "AAAA",
      initialValue: 30,
      numberOfShares: 2,
      finalValue: 60,
    });
  });
});
