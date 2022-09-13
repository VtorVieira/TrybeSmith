import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import Products from '../interfaces/IProductsInterface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Products): Promise<Products> {
    const productId = await this.model.create(product);
    return productId;
  }
}