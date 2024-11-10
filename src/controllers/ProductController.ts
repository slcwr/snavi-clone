// controllers/ProductController.ts
import { Request, Response } from 'express';
import { ProductService } from '../service/ProductService';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  searchProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const { keyword, modelNumber } = req.query;
      const products = await this.productService.searchProducts({
        keyword: String(keyword || ''),
        modelNumber: String(modelNumber || '')
      });
      
      res.json(products);
    } catch (error) {
      console.error('Search products error:', error);
      res.status(500).json({ error: '製品の検索に失敗しました' });
    }
  };
}