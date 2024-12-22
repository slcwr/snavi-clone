import { Product } from 'src/product/entities/product.entity';
import { DataSource } from 'typeorm';

export async function seedData(dataSource: DataSource): Promise<void> {
  const repository = dataSource.getRepository(Product);
  
  const seedData = [
    {
    productno: "T-01",  // NOT NULL制約があるため必須
    productname: "製品TEST",
    description: "製品データ",
    isActive: true
    }
  ];

  for (const data of seedData) {
    const entity = repository.create(data);
    await repository.save(entity);
  }
}