export type investmentProps = {
  symbol: string;
  totalQuotas: number;
  openingPrice: number;
};

export class InvestmentEntity {
  public openingPosition: number;
  public symbol: string;
  public totalQuotas: number;
  public openingPrice: number;

  constructor(data: investmentProps) {
    this.symbol = data.symbol;
    this.totalQuotas = data.totalQuotas;
    this.openingPrice = data.openingPrice;
    this.openingPosition = data.totalQuotas * data.openingPrice;
  }

  updateSymbol(data: string) {
    this.symbol = data;
  }

  updateTotalQuotas(data: number) {
    this.totalQuotas = data;
    this.openingPosition = this.openingPrice * this.totalQuotas;
  }

  updateOpeningPrice(data: number) {
    this.openingPrice = data;
    this.openingPosition = this.openingPrice * this.totalQuotas;
  }

  get _symbol(): string {
    return this.symbol;
  }

  private set _symbol(data: string) {
    this.symbol = data;
  }

  get _totalQuotas(): number {
    return this.totalQuotas;
  }

  private set _totalQuotas(data: number) {
    this.totalQuotas = data;
  }

  get _openingPrice(): number {
    return this.openingPrice;
  }

  private set _openingPrice(data: number) {
    this.openingPrice = data;
  }

  get _openingPosition(): number {
    return this.openingPosition;
  }
}
