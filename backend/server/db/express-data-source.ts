// index.ts または main.ts の先頭で
import 'reflect-metadata';  // 必ず最初にインポート
import { DataSource } from 'typeorm';
import { databaseConfig } from '../config/database';

export const ExpressDataSource = new DataSource(databaseConfig);

