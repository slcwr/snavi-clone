import { GenerateProduct } from '../../generateproduct/entities/generateproduct.entity';
import { DataSource } from 'typeorm';

export async function seedData(dataSource: DataSource): Promise<void> {
  const repository = dataSource.getRepository(GenerateProduct);


  // 既存データの削除
  await repository.clear();

  const seedData = [
    {
      generateproductno: 'K-01', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST01',
      price: 100000,
      isActive: true,
    },
    {
      generateproductno: 'K-02', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST02',
      price: 200000,
      isActive: true,
    },
    {
      generateproductno: 'K-03', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST03',
      price: 300000,
      isActive: true,
    },
    {
      generateproductno: 'K-04', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST04',
      price: 400000,
      isActive: true,
    },
    {
      generateproductno: 'K-05', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST05',
      price: 500000,
      isActive: true,
    },
    {
      generateproductno: 'K-06', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST06',
      price: 600000,
      isActive: true,
    },
    {
      generateproductno: 'K-07', // NOT NULL制約があるため必須
      generateproductname: '子製品TEST07',
      price: 700000,
      isActive: true,
    },
  ];

  for (const data of seedData) {
    const entity = repository.create(data);
    await repository.save(entity);
  }
}
