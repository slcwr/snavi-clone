"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
// server/routes/productRoutes.ts
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../../controllers/ProductController");
const router = express_1.default.Router();
exports.productRoutes = router;
const productController = new ProductController_1.ProductController();
router.get('/products', productController.searchProducts);
