import { Pool } from 'mysql2/promise';

import ILogin from '../interfaces/ILoginInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async find(login: ILogin): Promise<ILogin[]> {
    const { username, password } = login;
    console.log('model', password);
    const result = await this.connection.execute(
      'SELECT id FROM Trybesmith.Users WHERE username = ? AND password = ?', 
      [username, password],
    );
    const [rows] = result;
    return rows as ILogin[];
  }
}
