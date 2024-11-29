// src/db/seeds/run-seed.ts
import { DataSource } from "typeorm";
import { runSeeder } from "typeorm-extension";
import { ExpressDataSource } from "../express-data-source";
import { InitialDataSeeder } from "./initial-data.seeds";

const runSeed = async () => {
  try {
    await ExpressDataSource.initialize();
    await runSeeder(ExpressDataSource, InitialDataSeeder);
    console.log("All seeds have been completed");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await ExpressDataSource.destroy();
  }
};

runSeed();