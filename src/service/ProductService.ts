import { AppDataSource } from '../db/data-source';
const { Product } = require('../db/entities/Product');

interface SearchParams {
  keyword?: string;
  modelNumber?: string;
}

export class ProductService {
  private productRepository;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  async searchProducts(params: SearchParams) {
    const { keyword, modelNumber } = params;
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (keyword && modelNumber) {
      queryBuilder.where(
        '(product.productname ILIKE :keyword OR product.productno = :modelNumber)',
        {
          keyword: `%${keyword}%`,
          modelNumber
        }
      );
    } else if (keyword) {
      queryBuilder.where('product.productname ILIKE :keyword', {
        keyword: `%${keyword}%`
      });
    } else if (modelNumber) {
      queryBuilder.where('product.productno = :modelNumber', {
        modelNumber
      });
    }

    return await queryBuilder.getMany();
  }
}