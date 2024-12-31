import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';


export async function seedData(dataSource: DataSource): Promise<void> {
  const repository = dataSource.getRepository(User);

  const seedData = [
    {
      username: 'testuser',
      password: 'testuser',
      isActive: true,
    },
    {
      username: 'admin',
      password: 'admin',
      isActive: true,
    },
  ];

  for (const data of seedData) {
    const entity = repository.create(data);
    await repository.save(entity);
  }
}
