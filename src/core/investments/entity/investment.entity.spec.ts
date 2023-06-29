import { InvestmentEntity, investmentProps } from "./investment.entity";

describe("Investment entity", () => {
  const investmentProps: investmentProps = {
    symbol: "AAAA",
    openingPrice: 20,
    totalQuotas: 3,
  };

  it("Should able create an investment", () => {
    const investment = new InvestmentEntity(investmentProps);
    console.log(investment);
    expect(investment).toEqual({
      ...investmentProps,
      openingPosition: 60,
    });
  });

  it("Should change final value of entity", () => {
    const investment = new InvestmentEntity(investmentProps);
    investment.updateTotalQuotas(5);
    console.log(investment);

    expect(investment).toEqual({
      symbol: "AAAA",
      openingPrice: 20,
      totalQuotas: 5,
      openingPosition: 100,
    });
  });
});
