import { DataSourceOptions } from 'typeorm';
import { Product } from '../db/entities/Product'


export const databaseConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || "db",
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "myapp",
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    entities: [Product],
    migrations: ['src/db/migrations/**/*.js'],
    subscribers: ['src/db/subscribers/**/*.ts']
  };


