import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { databaseConfig } from '../config/database';

export const ExpressDataSource = new DataSource(databaseConfig);