// controllers/ProductController.ts
import { Request, Response } from 'express';
import { ProductService } from '../service/ProductService';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  handleProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      // HTTPメソッドに基づいて処理を分岐
      switch (req.method) {
        case 'GET':
          const { keyword, modelNumber, modelName } = req.query;
          const products = await this.productService.searchProducts({
            keyword: String(keyword || ''),
            modelNumber: String(modelNumber || ''),
            modelName: String(modelName || '')
          });
          res.json(products);
          break;

        case 'DELETE':
          const { id } = req.query;
          const result = await this.productService.deleteProducts({
            id: String(id || '')
          });
          res.json(result);
          break;

        default:
          res.status(405).json({ error: 'Method not allowed' });
      }
    } catch (error) {
      console.error('Product operation error:', error);
      res.status(500).json({ error: '操作に失敗しました' });
    }
  };
}
