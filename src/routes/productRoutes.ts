import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const router = Router();
const productController = new ProductController();

router.get('/products', productController.searchProducts);

export { router as productRoutes };