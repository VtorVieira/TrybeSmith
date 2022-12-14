import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import IOrders from '../interfaces/IOrdersInterface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(productsIds: Array<number>, userName: string): Promise<IOrders[]> {
    const orders = await this.model.create(productsIds, userName);
    return orders;
  }
}