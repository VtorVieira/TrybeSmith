import { Router } from 'express';

import OrdersController from '../controllers/ordersController';

import validate from '../middlewares/validate';

const ordersRouter = Router();

const order = new OrdersController();

ordersRouter.get('/', order.getAll);
ordersRouter.post('/', validate.validateToken, validate.validateProductsIdsOrders, order.create);

export default ordersRouter;