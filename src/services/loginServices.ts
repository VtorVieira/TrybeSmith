import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import ILogin from '../interfaces/ILoginInterface';
import HttpException from '../errors/CustomError';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async find(login: ILogin): Promise<ILogin[]> {
    console.log('services', login);
    const loginChecked = await this.model.find(login);
    console.log('loginChecked Services', loginChecked);
    if (loginChecked.length === 0) throw new HttpException(401, 'Username or password invalid');
    return loginChecked;
  }
}