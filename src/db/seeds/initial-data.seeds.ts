                                    // src/database/seeds/initial-data.seed.ts
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Product } from "../entities/Product";

export class InitialDataSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const productRepository = dataSource.getRepository(Product);

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