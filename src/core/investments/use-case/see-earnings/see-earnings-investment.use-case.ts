import { IInvestmentRepository } from "../../entity/investment.irepository";

export class SeeEarningsInvestmentUseCase {
  constructor(private readonly repository: IInvestmentRepository) {}
  async handle() {
    const investments = await this.repository.getAll();
    const investmentFIIList = investments.map((item) => {
      return item.FII;
    });

    console.log(investmentFIIList);

    const FIIResults: Promise<number[]> = Promise.all(
      investmentFIIList.map(async (item) => {
        const res = await this.repository.reqEarnings(item);
        return res;
      })
    );

    FIIResults.then((results) => {
      investments.forEach((investment) => {
        Object.values(investment).forEach((value) => {
          // if (results.includes(value)) {
          // }
        });
      });
    });
  }
}
