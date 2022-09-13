import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import IProducts from '../interfaces/IProductsInterface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: IProducts): Promise<IProducts> {
    const productId = await this.model.create(product);
    return productId;
  }
}