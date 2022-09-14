import { Pool } from 'mysql2/promise';

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
}
