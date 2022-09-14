import { Pool, ResultSetHeader } from 'mysql2/promise';

import IOrders from '../interfaces/IOrdersInterface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const result = await this.connection.execute(`
    SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) AS productsIds FROM Trybesmith.Orders AS O
    INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
    WHERE O.id = P.orderId
    GROUP BY O.id
    ORDER BY 2
  `);
    const [rows] = result;
    return rows as IOrders[];
  }

  public async find(userName: string): Promise<IOrders[]> {
    const result = await this.connection.execute(`
      SELECT 
        id 
      FROM 
        Trybesmith.Users AS U 
      WHERE U.username = ?`, [userName]);
    const [rows] = result;
    return rows as IOrders[];
  }

  public async createOrder(productsIds: Array<number>, userId: number) {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)', 
      [userId],
    );

    const { insertId } = result;

    await Promise.all(productsIds.map(async (id) => {
      const sql = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
      await this.connection.execute(sql, [insertId, id]);
    }));
  }

  public async create(productsIds: Array<number>, userName: string): Promise<IOrders[]> {
    const user = await this.find(userName);
    const userId = user[0].id;
    await this.createOrder(productsIds, userId as number);
    return { userId, productsIds } as never as IOrders[];
  }
}
