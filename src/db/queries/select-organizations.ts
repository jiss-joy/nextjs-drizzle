"use server";

import { db } from "../drizzle-client";
import {
  organizationsTable,
  SelectOrganizationsType,
} from "../schemas/organizations";

async function selectOrganizations(): Promise<SelectOrganizationsType[]> {
  return db.select().from(organizationsTable);
}

export { selectOrganizations };
