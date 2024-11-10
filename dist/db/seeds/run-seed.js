"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_extension_1 = require("typeorm-extension");
const express_data_source_1 = require("../express-data-source");
const initial_data_seeds_1 = require("./initial-data.seeds");
const runSeed = async () => {
    try {
        await express_data_source_1.ExpressDataSource.initialize();
        await (0, typeorm_extension_1.runSeeder)(express_data_source_1.ExpressDataSource, initial_data_seeds_1.InitialDataSeeder);
        console.log("All seeds have been completed");
    }
    catch (error) {
        console.error("Error during seeding:", error);
    }
    finally {
        await express_data_source_1.ExpressDataSource.destroy();
    }
};
runSeed();
