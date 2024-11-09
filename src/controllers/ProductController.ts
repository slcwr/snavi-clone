import { Request, Response } from 'express';
import { ProductService } from '../service/ProductService';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  searchProducts = async (req: Request, res: Response): Promise<void> => {
    console.log('API route hit');
    console.log('Query params:', req.query);

    try {
      const { keyword, modelNumber } = req.query;
      
      const products = await this.productService.searchProducts({
        keyword: keyword as string,
        modelNumber: modelNumber as string
      });

      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: '製品の取得に失敗しました' });
    }

    // リクエストの詳細をログ出力
    console.log({
      method: req.method,
      query: req.query,
      headers: req.headers
    });
  };
}