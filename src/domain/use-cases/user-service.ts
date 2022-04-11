import { UserModel, AddUserParams } from "@/domain/models/user";

export const USER_SERVICE = "USER_SERVICE"

export interface IUserService {
  addUser: (data: AddUserParams) => Promise<UserModel>;
  getUser: () => Promise<Array<UserModel>>;
}
