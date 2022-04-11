import { Adapter, Service } from "@tsclean/core";
import { IUserService } from "@/domain/use-cases/user-service";
import { AddUserParams, UserModel } from "@/domain/models/user";
import { IUserRepository, USER_REPOSITORY } from "@/domain/models/contracts/user-repository";

@Service()
export class UserServiceImpl implements IUserService {
  constructor(
    @Adapter(USER_REPOSITORY) private readonly userRepository: IUserRepository
  ) { }

  async addUser(data: AddUserParams): Promise<UserModel> {
    return await this.userRepository.insertUser(data);
  }

  async getUser(): Promise<Array<UserModel>> {
    return await this.userRepository.selectUser();
  }
}
