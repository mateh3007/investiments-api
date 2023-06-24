export type investmentProps = {
  FLL: string;
  initialValue: number;
  numberOfShares: number;
};

export class InvestmentEntity {
  public readonly props: Required<investmentProps>;
  public readonly finalValue: number;
  constructor(data: investmentProps) {
    this.props = {
      ...data,
    };
    this.finalValue = this.props.initialValue * this.props.numberOfShares;
  }

  updateFLL(data: string) {
    this.FLL = data;
  }

  updateInitialValue(data: number) {
    this.initialValue = data;
  }

  addMoreFunds(data: number) {
    const funds = data;
    this.initialValue += funds;
  }

  updateNumberOfShares(data: number) {
    this.numberOfShare = data;
  }

  get FLL(): string {
    return this.FLL;
  }

  private set FLL(data: string) {
    this.FLL = data;
  }

  get initialValue(): number {
    return this.initialValue;
  }

  private set initialValue(data: number) {
    this.initialValue = data;
  }

  get numberOfShare(): number {
    return this.numberOfShare;
  }

  private set numberOfShare(data: number) {
    this.numberOfShare = data;
  }
}
