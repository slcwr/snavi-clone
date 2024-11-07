"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialDataSeeder = void 0;
const Product_1 = require("../entities/Product");
class InitialDataSeeder {
    async run(dataSource, factoryManager) {
        const productRepository = dataSource.getRepository(Product_1.Product);
        const products = [
            {
                productno: "A-01",
                productname: "製品A",
                price: 100,
            },
            {
                productno: "A-02",
                productname: "製品B",
                price: 200,
            },
        ];
        await productRepository.save(products);
    }
}
exports.InitialDataSeeder = InitialDataSeeder;
