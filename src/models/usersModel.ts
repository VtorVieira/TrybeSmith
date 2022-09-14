import { Pool, ResultSetHeader } from 'mysql2/promise';

import IUsers from '../interfaces/IUsersInterface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUsers): Promise<IUsers> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
      [username, classe, level, password],
    );
    const [{ insertId }] = result;
    return { id: insertId, ...user };
  }
}
