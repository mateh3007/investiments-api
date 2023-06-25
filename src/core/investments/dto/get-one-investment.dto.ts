export type getOneInvestmentDtoInput = {
  FII: string;
};

export type getOneInvestmentDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
