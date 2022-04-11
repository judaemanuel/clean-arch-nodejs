import { USER_REPOSITORY } from "@/domain/models/contracts/user-repository";
import { USER_SERVICE } from "@/domain/use-cases/user-service";

import { UserServiceImpl } from "@/domain/use-cases/impl/user-service-impl";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";

export const adapters = [
  {
    useClass: UserMongooseRepositoryAdapter,
    provide: USER_REPOSITORY
  }
];

export const services = [
  {
    useClass: UserServiceImpl,
    provide: USER_SERVICE
  }
];
