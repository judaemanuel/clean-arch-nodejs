import { UserModel, AddUserParams } from "@/domain/models/user";

export const USER_REPOSITORY = "USER_REPOSITORY";

export interface IUserRepository {
  insertUser: (data: AddUserParams) => Promise<UserModel>;
  selectUser: () => Promise<Array<UserModel>>;
}
