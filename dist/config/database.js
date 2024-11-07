"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
exports.databaseConfig = {
    type: 'postgres',
    host: process.env.DB_HOST || "db",
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "myapp",
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
    entities: ['dist/entities/**/*.ts'],
    migrations: ['src/db/migrations/**/*.ts'],
    subscribers: ['src/db/subscribers/**/*.ts']
};
