// src/db/seeds/run-seed.ts
import { DataSource } from "typeorm";
import { runSeeder } from "typeorm-extension";
import { AppDataSource } from "../data-source";
import { InitialDataSeeder } from "./initial-data.seeds";

const runSeed = async () => {
  try {
    await AppDataSource.initialize();
    await runSeeder(AppDataSource, InitialDataSeeder);
    console.log("All seeds have been completed");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await AppDataSource.destroy();
  }
};

runSeed();