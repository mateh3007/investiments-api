import { InvestmentEntity } from "./investment.entity";

export interface IInvestmentRepository {
  create(data: InvestmentEntity): Promise<void>;
}
