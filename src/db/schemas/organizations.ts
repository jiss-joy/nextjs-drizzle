import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const organizationsTable = pgTable("organizations", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export type SelectOrganizationsType = InferSelectModel<
  typeof organizationsTable
>;
export type InsertOrganizationsType = InferInsertModel<
  typeof organizationsTable
>;
