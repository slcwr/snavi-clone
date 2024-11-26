// routes/productRoutes.ts
import express from 'express';
import { ProductController } from '../../controllers/ProductController';

const router = express.Router();
const productController = new ProductController();

// 同じエンドポイントで複数のHTTPメソッドを処理
router.route('/products')
  .get(productController.handleProduct);


router.route('/products/:id')  // IDを含むエンドポイントを別に定義
  .delete(productController.handleProduct)
  .put(productController.handleProduct);

export default router;