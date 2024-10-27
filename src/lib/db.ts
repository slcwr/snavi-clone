import { AppDataSource } from '../db/data-source';

let initialized = false;

export async function initializeDatabase() {
  if (!initialized) {
    try {
      await AppDataSource.initialize();
      initialized = true;
      console.log('Database connection established');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }
  return AppDataSource;
}