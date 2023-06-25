import { InvestmentRepositoryInMemory } from "../../../../infra/db/investments/test/investment.repository-in-memory";
import { SeeEarningsInvestmentUseCase } from "./see-earnings-investment.use-case";
describe("See earnings investment", () => {
  it("Should able return all investments", async () => {
    const repository = new InvestmentRepositoryInMemory();
    const useCase = new SeeEarningsInvestmentUseCase(repository);
    const earning = await repository.reqEarnings("CPTS11");

    const output = await useCase.handle();
    console.log(output);
    expect(earning).toEqual(82.82);
  });
});
