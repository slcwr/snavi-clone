"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
//src/service/ProductService.ts
const express_data_source_1 = require("../db/express-data-source");
const Product_1 = require("../db/entities/Product");
class ProductService {
    constructor() {
        this.initialize();
    }
    // 初期化用の非同期メソッド
    async initialize() {
        try {
            if (!express_data_source_1.ExpressDataSource.isInitialized) {
                await express_data_source_1.ExpressDataSource.initialize();
            }
            this.productRepository = express_data_source_1.ExpressDataSource.getRepository(Product_1.Product);
        }
        catch (error) {
            console.error('Failed to initialize ProductService:', error);
            throw error;
        }
    }
    // constructor() {
    //   // データソースの初期化確認
    //   if (!AppDataSource.isInitialized) {
    //     await AppDataSource.initialize();
    //   }
    //   this.productRepository = AppDataSource.getRepository(Product);
    // }
    async searchProducts(params) {
        const { keyword, modelNumber } = params;
        const queryBuilder = this.productRepository.createQueryBuilder('product');
        if (keyword && modelNumber) {
            queryBuilder.where('(product.productname ILIKE :keyword OR product.productno = :modelNumber)', {
                keyword: `%${keyword}%`,
                modelNumber
            });
        }
        else if (keyword) {
            queryBuilder.where('product.productname ILIKE :keyword', {
                keyword: `%${keyword}%`
            });
        }
        else if (modelNumber) {
            queryBuilder.where('product.productno = :modelNumber', {
                modelNumber
            });
        }
        return await queryBuilder.getMany();
    }
}
exports.ProductService = ProductService;
