export type CreateInvestmentDtoInput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
};

export type CreateInvestmentDtoOutput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
