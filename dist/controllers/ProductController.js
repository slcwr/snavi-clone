"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../service/ProductService");
class ProductController {
    constructor() {
        this.searchProducts = async (req, res) => {
            try {
                const { keyword, modelNumber } = req.query;
                const products = await this.productService.searchProducts({
                    keyword: String(keyword || ''),
                    modelNumber: String(modelNumber || '')
                });
                res.json(products);
            }
            catch (error) {
                console.error('Search products error:', error);
                res.status(500).json({ error: '製品の検索に失敗しました' });
            }
        };
        this.productService = new ProductService_1.ProductService();
    }
}
exports.ProductController = ProductController;
