import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const dbConnectionString = process.env.DATABASE_URL!;

const globalClient = global as unknown as {
  client: postgres.Sql | undefined;
};

if (!globalClient.client) {
  globalClient.client = postgres(dbConnectionString, { prepare: false });
}

const db = drizzle(globalClient.client, {
  logger: process.env.DRIZZLE_LOGGER === "true",
});

const seedClient = postgres(dbConnectionString);
const seedDb = drizzle(seedClient);

export { db, seedDb };
