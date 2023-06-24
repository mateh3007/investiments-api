import { InvestmentEntity } from "../../../../investments/entity/investment.entity";
import { IInvestmentRepository } from "../../../../investments/entity/investment.irepository";
import { prisma } from "../../ORM/prisma/prisma";

export class InvestmentRepositoryInMemory implements IInvestmentRepository {
  async create(data: InvestmentEntity): Promise<void> {
    await prisma.investment.create({
      data: {
        ...data,
      },
    });
  }
  getOne(data: string): Promise<CreateInvestmentDtoOutput> {
    throw new Error("Method not implemented.");
  }
}
