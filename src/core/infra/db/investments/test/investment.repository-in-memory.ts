import { InvestmentEntity } from "../../../../investments/entity/investment.entity";
import { IInvestmentRepository } from "../../../../investments/entity/investment.irepository";

export class InvestmentRepositoryInMemory implements IInvestmentRepository {
  repository: InvestmentEntity[] = [];

  async create(data: InvestmentEntity): Promise<void> {
    this.repository.push(data);
  }
  getOne(data: string): Promise<CreateInvestmentDtoOutput> {
    throw new Error("Method not implemented.");
  }
}
