// routes/productRoutes.ts
import express from 'express';
import { ProductController } from '../../controllers/ProductController';

const router = express.Router();
const productController = new ProductController();

// 同じエンドポイントで複数のHTTPメソッドを処理
router.route('/products')
  .get(productController.handleProduct)
  .delete(productController.handleProduct);

export default router;