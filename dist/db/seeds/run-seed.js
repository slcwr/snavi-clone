"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const data_source_1 = require("../data-source");
const initial_data_seeds_1 = require("./initial-data.seeds");
const runSeed = async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        await (0, typeorm_extension_1.runSeeder)(data_source_1.AppDataSource, initial_data_seeds_1.InitialDataSeeder);
        console.log("All seeds have been completed");
    }
    catch (error) {
        console.error("Error during seeding:", error);
    }
    finally {
        await data_source_1.AppDataSource.destroy();
    }
};
runSeed();
