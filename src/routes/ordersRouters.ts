import { Router } from 'express';

import OrdersController from '../controllers/ordersController';

const ordersRouter = Router();

const order = new OrdersController();

ordersRouter.get('/', order.getAll);

export default ordersRouter;