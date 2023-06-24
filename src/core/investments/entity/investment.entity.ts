export type investmentProps = {
  FLL: string;
  initialValue: number;
  numberOfShares: number;
};

export class InvestmentEntity {
  public FLL: string;
  public initialValue: number;
  public numberOfShares: number;
  public finalValue: number;

  constructor(data: investmentProps) {
    this.FLL = data.FLL;
    this.initialValue = data.initialValue;
    this.numberOfShares = data.numberOfShares;
    this.finalValue = this.initialValue * this.numberOfShares;
  }

  updateFLL(data: string) {
    this.FLL = data;
  }

  updateInitialValue(data: number) {
    this.initialValue = data;
    this.finalValue = data * this.numberOfShares;
  }

  updateNumberOfShares(data: number) {
    this.numberOfShares = data;
    this.finalValue = data * this.initialValue;
  }

  get _FLL(): string {
    return this.FLL;
  }

  private set _FLL(data: string) {
    this.FLL = data;
  }

  get _initialValue(): number {
    return this.initialValue;
  }

  private set _initialValue(data: number) {
    this.initialValue = data;
  }

  get _numberOfShares(): number {
    return this.numberOfShares;
  }

  private set _numberOfShares(data: number) {
    this.numberOfShares = data;
  }

  get _finalValue(): number {
    return this.finalValue;
  }

  private set _finalValue(data: number) {
    this.finalValue = data;
  }
}
