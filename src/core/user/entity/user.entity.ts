import { InvestmentEntity } from "../../investments/entity/investment.entity";
import { randomUUID } from "crypto";

export type userProps = {
  name: string;
  email: string;
  password: string;
};

export class UserEntity {
  public id: string;
  public name: string;
  public email: string;
  private password: string;
  public investments: InvestmentEntity[] | null;

  constructor(data: userProps) {
    this.id = randomUUID();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.investments = [];
  }

  updateName(data: string) {
    this.name = data;
  }

  updateEmail(data: string) {
    this.email = data;
  }

  updatePassword(data: string) {
    this.password = data;
  }

  createInvestment(data: InvestmentEntity) {
    this.investments?.push(data);
  }

  get _name(): string {
    return this.name;
  }

  private set _name(data: string) {
    this.name = data;
  }

  get _email(): string {
    return this.email;
  }

  private set _email(data: string) {
    this.email = data;
  }

  get _investments(): InvestmentEntity[] | null {
    return this.investments;
  }
}
