import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations/",
  schema: "./src/db/schemas/*",
  dialect: "postgresql",
  migrations: {
    prefix: "timestamp",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
