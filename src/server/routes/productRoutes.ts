// server/routes/productRoutes.ts
import express from 'express';
import { ProductController } from '../../controllers/ProductController';

const router = express.Router();
const productController = new ProductController();

router.get('/products', productController.searchProducts);

export { router as productRoutes };