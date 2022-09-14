import { Request, Response } from 'express';
import OrdersService from '../services/ordersServices';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  };
}