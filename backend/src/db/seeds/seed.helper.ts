import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppModule } from '../../app.module';
import { seedData } from './generateproduct.seed';
import { getDataSourceToken } from '@nestjs/typeorm';

async function runSeeder() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get<DataSource>(getDataSourceToken('default'));

  // データソースが初期化されているか確認
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  
  try {
    await seedData(dataSource);
    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await app.close();
  }
}

runSeeder();