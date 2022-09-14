import { Router } from 'express';

import ProductsController from '../controllers/productsController';

import validate from '../middlewares/validate';

const productsRouter = Router();

const product = new ProductsController();

productsRouter.post(
  '/', 
  validate.validateNameProducts, 
  validate.validateAmountProducts, 
  product.create,
);
productsRouter.get('/', product.getAll);

export default productsRouter;