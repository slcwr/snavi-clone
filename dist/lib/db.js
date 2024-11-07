"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = initializeDatabase;
const data_source_1 = require("../db/data-source");
let initialized = false;
async function initializeDatabase() {
    if (!initialized) {
        try {
            await data_source_1.AppDataSource.initialize();
            initialized = true;
            console.log('Database connection established');
        }
        catch (error) {
            console.error('Error connecting to database:', error);
            throw error;
        }
    }
    return data_source_1.AppDataSource;
}
