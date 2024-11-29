//src/service/ProductService.ts
import { ExpressDataSource } from '../db/express-data-source';
import { GenerateProduct } from '../db/entities/GenerateProduct';
import { Repository } from 'typeorm';

interface SearchParams {
  keyword?: string;
  modelNumber?: string;
  modelName?: string;
}

interface DeleteParam {
  id: string;
}

interface UpdateProductParams {
  id: string;
  productno?: string;
  productname?: string;
  description?: string;
}

export class ProductService {
  private productRepository: Repository<GenerateProduct>;

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

  async deleteProducts(params: DeleteParam) {
    await this.ensureInitialized();
    const { id } = params;

    if (!id) {
      throw new Error('ID is required for deletion');
    }

    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Product not found');
    }
    return { success: true, message: 'Product deleted successfully' };
  }

  async putProducts(params: UpdateProductParams)  {
    await this.ensureInitialized();
    const { id, productno, productname, description } = params;

    if (!id) {
      throw new Error('ID is required for update');
    }
    const data = await this.productRepository.findOne({
      where: { id: id }
    });

    if (!data) {
      const error = new Error('Product not found');
      throw error;
    }
    // 更新処理
    const updatedData = await this.productRepository.save({
      ...data,
      ...(productno !== undefined && { productno }),
      ...(productname !== undefined && { productname }),
      ...(description !== undefined && { description })
    });
  

    await this.productRepository.save(data);
    return { 
     success: true, 
     message: 'Product updated successfully',
     data: data 
   };
  }

  // リポジトリの初期化を確認するヘルパーメソッド
  private async ensureInitialized() {
    if (!this.productRepository) {
      await this.initialize();
    }
  }
}