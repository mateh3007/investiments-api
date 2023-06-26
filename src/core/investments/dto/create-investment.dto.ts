type CreateInvestmentDtoInput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
};

type CreateInvestmentDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  totalExpense: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
