export type UserModel = {
  id: string | number;
  name: string;
  email: string;
};

export type AddUserParams = Omit<UserModel, 'id'>;
export type EditUserParams = UserModel;
