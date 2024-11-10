"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const database_1 = require("../config/database");
exports.ExpressDataSource = new typeorm_1.DataSource(database_1.databaseConfig);
