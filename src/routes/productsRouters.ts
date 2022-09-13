import { Router } from 'express';

import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const product = new ProductsController();

productsRouter.post('/', product.create);
productsRouter.get('/', product.getAll);

export default productsRouter;