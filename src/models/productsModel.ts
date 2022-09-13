import { Pool, ResultSetHeader } from 'mysql2/promise';

import IProducts from '../interfaces/IProductsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProducts[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as IProducts[];
  }

  public async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );
    const [{ insertId }] = result;
    return { id: insertId, ...product };
  }
}
