//src/service/ProductService.ts
import { ExpressDataSource } from '../db/express-data-source';
import { GenerateProduct } from '../db/entities/GenerateProduct';

interface SearchParams {
  keyword?: string;
  modelNumber?: string;
  modelName?: string;
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
    this.productRepository = ExpressDataSource.getRepository(GenerateProduct);
  } catch (error) {
    console.error('Failed to initialize ProductService:', error);
    throw error;
  }
}

  async searchProducts(params: SearchParams) {
    const { keyword, modelNumber, modelName } = params;
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (keyword && modelNumber && modelName) {
      queryBuilder.where(
        '(product.productname ILIKE :keyword OR product.productno = :modelNumber OR product.productname = :modelName)',
        {
          keyword: `%${keyword}%`,
          modelNumber,
          modelName: `%${modelName}%`
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
    } else if (modelName) {
      queryBuilder.where('product.productname ILIKE :modelName', {
        modelName: `%${modelName}%`
      });
    }

    return await queryBuilder.getMany();
  }
}