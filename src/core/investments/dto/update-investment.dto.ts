export type updateInvestmentDtoInput = {
  FII?: string;
  initialValue?: number;
  numberOfShares?: number;
};

export type updateInvestmentDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
