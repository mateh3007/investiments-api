import { InvestmentRepositoryInMemory } from "../../../../infra/db/investments/test/investment.repository-in-memory";
import { CreateInvestmentDtoInput } from "../../dto/create-investment.dto";
import { InvestmentEntity } from "../../entity/investment.entity";
import { CreateInvestmentUseCase } from "./create-investment.use-case";

describe("Investment use-case", () => {
  it("Should able implement with repository in memory", async () => {
    const data: CreateInvestmentDtoInput = {
      symbol: "CPTS11",
      openingPrice: 75,
      totalQuotas: 56,
    };

    const investment = new InvestmentEntity(data);
    const repository = new InvestmentRepositoryInMemory();
    const useCase = new CreateInvestmentUseCase(repository);
    const output = await useCase.handle(investment);

    console.log(output);
  });
});
