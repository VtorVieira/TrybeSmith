import { Pool, ResultSetHeader } from 'mysql2/promise';

import Products from '../interfaces/IProductsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Products): Promise<Products> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
      [name, amount],
    );
    const [{ insertId }] = result;
    return { id: insertId, ...product };
  }
}
