import { InvestmentRepositoryInMemory } from "../../../../infra/db/investments/test/investment.repository-in-memory";
import { CreateInvestmentUseCase } from "./create-investment.use-case";

describe("Investment use-case", () => {
  it("Should able implement with repository in memory", async () => {
    const data: CreateInvestmentDtoInput = {
      FII: "CPTS11",
      initialValue: 30,
      numberOfShares: 3,
    };

    const data2: CreateInvestmentDtoInput = {
      FII: "KNCR11",
      initialValue: 20,
      numberOfShares: 3,
    };

    const data3: CreateInvestmentDtoInput = {
      FII: "PORD11",
      initialValue: 20,
      numberOfShares: 3,
    };

    const data4: CreateInvestmentDtoInput = {
      FII: "AIEC11",
      initialValue: 20,
      numberOfShares: 3,
    };

    const repository = new InvestmentRepositoryInMemory();
    const useCase = new CreateInvestmentUseCase(repository);
    const createInvestment = await useCase.handle(data);
    await useCase.handle(data2);
    await useCase.handle(data3);
    await useCase.handle(data4);

    expect(createInvestment).toEqual({
      ...createInvestment,
    });
  });
});
