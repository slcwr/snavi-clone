//src/service/ProductService.ts
import { ExpressDataSource } from '../db/express-data-source';
import { Product } from '../db/entities/Product';

interface SearchParams {
  keyword?: string;
  modelNumber?: string;
}

export class ProductService {
  private productRepository: any;
  private initialized = false;

  constructor() {
    this.initialize().catch(error => {
      console.error('Failed to initialize ProductService:', error);
    });
  }
// 初期化用の非同期メソッド
private async initialize() {
  try {
    if (!ExpressDataSource.isInitialized) {
      await ExpressDataSource.initialize();
    }
    this.productRepository = ExpressDataSource.getRepository(Product);
  } catch (error) {
    console.error('Failed to initialize ProductService:', error);
    throw error;
  }
}

  // constructor() {
  //   // データソースの初期化確認
  //   if (!AppDataSource.isInitialized) {
  //     await AppDataSource.initialize();
  //   }
  //   this.productRepository = AppDataSource.getRepository(Product);
  // }

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
      queryBuilder.where('product.productno ILIKE :modelNumber', {
        modelNumber
      });
    }

    return await queryBuilder.getMany();
  }
}