import {
  createUserDtoInput,
  createUserDtoOutput,
} from "../dto/create-user.dto";
import { UserEntity } from "../entity/user.entity";
import { IUserRepository } from "../entity/user.irepository";

export class CreateUserUseCase {
  constructor(private readonly repository: IUserRepository) {}

  async handle(data: createUserDtoInput): Promise<createUserDtoOutput | null> {
    const user = new UserEntity(data);
    await this.repository.create(user);
    return user.toJSON();
  }
}
