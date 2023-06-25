import { getOneInvestmentDtoInput } from "../dto/get-one-investment.dto";
import { updateInvestmentDtoInput } from "../dto/update-investment.dto";
import { InvestmentEntity, investmentProps } from "./investment.entity";

export interface IInvestmentRepository {
  create(data: InvestmentEntity): Promise<void>;
  getOne(
    data: getOneInvestmentDtoInput
  ): Promise<CreateInvestmentDtoOutput | null>;
  update(data: updateInvestmentDtoInput): Promise<CreateInvestmentDtoInput>;
  getAll(): Promise<getAllInvestmentsDtoOutput[]>;
  reqEarnings(payload: string): Promise<number>;
}
