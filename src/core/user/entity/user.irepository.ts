import {} from "../dto/create-user.dto";
import { UserEntity } from "./user.entity";

export interface IUserRepository {
  create(data: UserEntity): any;
}
