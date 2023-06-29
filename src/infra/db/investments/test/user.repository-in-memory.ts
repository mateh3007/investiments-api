import { createUserDtoInput } from "../../../../core/user/dto/create-user.dto";
import { UserEntity } from "../../../../core/user/entity/user.entity";
import { IUserRepository } from "../../../../core/user/entity/user.irepository";

const db: UserEntity[] = [];

export class UserRepositoryInMemory implements IUserRepository {
  async create(data: UserEntity) {
    db.push(data);
    console.log(db);
    return db;
  }
}
