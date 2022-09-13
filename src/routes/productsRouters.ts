import { Router } from 'express';

import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const product = new ProductsController();

productsRouter.post('/', product.create);

export default productsRouter;