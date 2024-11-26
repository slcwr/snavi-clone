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
          const { id } = req.params;  // req.queryではなくreq.paramsを使用
          if (!id) {
            res.status(400).json({ error: 'Valid ID is required for deletion' });
          return;
          }
          const delresult = await this.productService.deleteProducts({ id });
          res.json(delresult);
          break;

        case 'PUT':
          const putId = req.params.id;  // req.paramsからIDを取得
          const updateData = req.body;
  
          if (!putId) {
          res.status(400).json({ error: 'Valid ID is required for update' });
          return;
          }

          const putresult = await this.productService.putProducts({
            id: putId,
            ...updateData
          });
          res.json(putresult);
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
