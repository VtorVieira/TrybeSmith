import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import OrdersService from '../services/ordersServices';

const JWT_SECRET = 'validateToken';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { productsIds } = req.body;
    const token = jwt.verify(authorization as string, JWT_SECRET);
    const userName = Object.values(token)[1];
    const result = await this.ordersService.create(productsIds, userName);
    res.status(201).json(result);
  };
}