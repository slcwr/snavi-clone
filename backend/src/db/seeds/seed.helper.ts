import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppModule } from '../../app.module';
import { seedData } from './data.seed';
import { getDataSourceToken } from '@nestjs/typeorm';

async function runSeeder() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get<DataSource>(getDataSourceToken('default'));
  
  try {
    await seedData(dataSource);
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await app.close();
  }
}

runSeeder();