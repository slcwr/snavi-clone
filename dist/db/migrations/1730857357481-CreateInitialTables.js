"use strict";
// src/db/migrations/1730857357481-CreateInitialTables.js
const { Table } = require("typeorm");
class CreateInitialTables1730857357481 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    default: "uuid_generate_v4()"
                },
                {
                    name: "productno",
                    type: "varchar",
                    length: "100"
                },
                {
                    name: "productname",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "price",
                    type: "integer"
                },
                {
                    name: "isActive",
                    type: "boolean",
                    default: true
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("products");
    }
}
module.exports = CreateInitialTables1730857357481;
