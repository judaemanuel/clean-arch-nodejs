import { AddUserParams, UserModel } from "@/domain/models/user";
import { USER_SERVICE, IUserService } from "@/domain/use-cases/user-service";
import { Mapping, Get, Adapter, Post, Body } from "@tsclean/core";

@Mapping('api/v1/user')
export class UserController {

  constructor(
    @Adapter(USER_SERVICE) private readonly userService: IUserService
  ) { }

  // Example function
  @Get("/hello-world")
  async getWelcome(): Promise<any> {
    return 'Welcome to the world of clean architecture'
  }

  @Get()
  async getUsers(): Promise<Array<UserModel>> {
    return await this.userService.getUser();
  }


  @Post()
  async addUser(@Body() data: AddUserParams): Promise<UserModel> {
    return await this.userService.addUser(data);
  }
}
