import { InvestmentEntity } from "../../investments/entity/investment.entity";

export type createUserDtoInput = {
  name: string;
  email: string;
  password: string;
};

export type createUserDtoOutput = {
  id: string;
  name: string;
  email: string;
  shares: InvestmentEntity[] | null;
};
