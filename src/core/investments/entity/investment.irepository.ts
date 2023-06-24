import { InvestmentEntity, investmentProps } from "./investment.entity";

export interface IInvestmentRepository {
  create(data: InvestmentEntity): Promise<void>;
  getOne(data: string): Promise<CreateInvestmentDtoOutput>;
}
