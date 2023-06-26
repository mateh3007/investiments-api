import axios from "axios";
import {
  getOneInvestmentDtoInput,
  getOneInvestmentDtoOutput,
} from "../../../../core/investments/dto/get-one-investment.dto";
import { updateInvestmentDtoInput } from "../../../../core/investments/dto/update-investment.dto";
import { InvestmentEntity } from "../../../../core/investments/entity/investment.entity";
import { IInvestmentRepository } from "../../../../core/investments/entity/investment.irepository";
import { prisma } from "../../ORM/prisma/prisma";

export class InvestmentRepositoryInMemory implements IInvestmentRepository {
  async create(data: InvestmentEntity): Promise<void> {
    await prisma.investment.create({
      data: {
        ...data,
      },
    });
  }
  async getOne(
    data: getOneInvestmentDtoInput
  ): Promise<getOneInvestmentDtoOutput | null> {
    const investment = await prisma.investment.findUnique({
      where: {
        FII: data.FII,
      },
    });

    if (!investment) {
      throw new Error("Investment not created");
    }

    return {
      ...investment,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
  }

  async update(
    data: updateInvestmentDtoInput
  ): Promise<CreateInvestmentDtoInput> {
    const investment = await prisma.investment.update({
      where: {
        FII: data.FII,
      },
      data,
    });
    return investment;
  }

  async getAll(): Promise<getAllInvestmentsDtoOutput[]> {
    const investments = await prisma.investment.findMany();
    return investments.map((item) => {
      return item;
    });
  }

  // async reqEarnings(payload: string): Promise<number> {
  //   const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${payload}.SA&apikey=QUDT2RRX5P8KO4ZZ`;

  //   const response = await axios.get(url);
  //   const data = response.data;
  //   const key = data["Time Series (Daily)"];
  //   const firstObjectKey = Object.keys(key)[0];
  //   const firstObject = key[firstObjectKey];
  //   const closeValue = Object.keys(firstObject)[3];
  //   const finalValue = firstObject[closeValue];

  //   return parseFloat(finalValue);
  // }
}
