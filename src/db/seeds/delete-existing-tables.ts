import { seedDb } from "../drizzle-client";
import { organizationsTable } from "../schemas/organizations";

async function deleteExistingTables() {
  await seedDb.delete(organizationsTable);
}

export { deleteExistingTables };
