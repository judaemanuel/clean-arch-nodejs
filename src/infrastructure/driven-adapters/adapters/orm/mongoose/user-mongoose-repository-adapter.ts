import { IUserRepository } from "@/domain/models/contracts/user-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { UserModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";

export class UserMongooseRepositoryAdapter implements IUserRepository {
  async insertUser(data: AddUserParams): Promise<UserModel> {
    return await UserModelSchema.create(data);
  }

  async selectUser(): Promise<Array<UserModel>> {
    return await UserModelSchema.find()
  }
}
