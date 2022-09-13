import { Request, Response } from 'express';
import ProductsService from '../services/productsServices';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    
    const products = await this.productsService.create(product);
    res.status(201).json(products);
  };
}