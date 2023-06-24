export type investmentProps = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
};

export class InvestmentEntity {
  public FII: string;
  public initialValue: number;
  public numberOfShares: number;
  public finalValue: number;

  constructor(data: investmentProps) {
    this.FII = data.FII;
    this.initialValue = data.initialValue;
    this.numberOfShares = data.numberOfShares;
    this.finalValue = this.initialValue * this.numberOfShares;
  }

  updateFII(data: string) {
    this.FII = data;
  }

  updateInitialValue(data: number) {
    this.initialValue = data;
    this.finalValue = data * this.numberOfShares;
  }

  updateNumberOfShares(data: number) {
    this.numberOfShares = data;
    this.finalValue = data * this.initialValue;
  }

  toJSON(data: InvestmentEntity) {
    const { FII, initialValue, numberOfShares, finalValue } = data;
    return {
      FII,
      initialValue,
      numberOfShares,
      finalValue,
    };
  }

  get _FII(): string {
    return this.FII;
  }

  private set _FII(data: string) {
    this.FII = data;
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
