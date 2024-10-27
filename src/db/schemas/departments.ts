import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { organizationsTable } from "./organizations";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export const departmentsTable = pgTable("departments", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  organizationId: uuid()
    .notNull()
    .references(() => organizationsTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});

export type SelectDepartmentsType = InferSelectModel<typeof departmentsTable>;
export type InsertDepartmentsType = InferInsertModel<typeof departmentsTable>;
