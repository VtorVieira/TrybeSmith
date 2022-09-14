import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import IUsers from '../interfaces/IUsersInterface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: IUsers): Promise<IUsers> {
    const users = await this.model.create(user);
    return users;
  }
}