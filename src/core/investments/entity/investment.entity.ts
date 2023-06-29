export type investmentProps = {
  symbol: string;
  totalQuotas: number;
  openingPrice: number;
};

export class InvestmentEntity {
  public readonly openingPosition: number;

  constructor(private readonly data: investmentProps) {
    this.openingPosition = data.totalQuotas * data.openingPrice;
  }

  updateSymbol(data: string) {
    this.symbol = data;
  }

  updateTotalQuotas(data: number) {
    this.totalQuotas = data;
  }

  updateOpeningPrice(data: number) {
    this.openingPrice = data;
  }

  get symbol(): string {
    return this.symbol;
  }

  private set symbol(data: string) {
    this.symbol = data;
  }

  get totalQuotas(): number {
    return this.totalQuotas;
  }

  private set totalQuotas(data: number) {
    this.totalQuotas = data;
  }

  get openingPrice(): number {
    return this.openingPrice;
  }

  private set openingPrice(data: number) {
    this.openingPrice = data;
  }

  get _openingPosition(): number {
    return this.openingPosition;
  }
}
