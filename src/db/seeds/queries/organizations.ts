import { seedDb } from "../../drizzle-client";
import {
  InsertOrganizationsType,
  organizationsTable,
} from "../../schemas/organizations";

const organizationsData: InsertOrganizationsType[] = [
  {
    name: "Test Organization 1",
    email: "test1@example.com",
  },
  {
    name: "Test Organization 2",
    email: "test2@example.com",
  },
];

async function createOrganizations() {
  return seedDb
    .insert(organizationsTable)
    .values(organizationsData)
    .returning();
}

export { createOrganizations };
