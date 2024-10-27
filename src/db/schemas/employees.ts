import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { organizationsTable } from "./organizations";
import { departmentsTable } from "./departments";

export const employeesTable = pgTable("employees", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  organizationId: uuid()
    .notNull()
    .references(() => organizationsTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  departmentId: uuid()
    .notNull()
    .references(() => departmentsTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});

export type SelectEmployeesType = InferSelectModel<typeof employeesTable>;
export type InsertEmployeesType = InferInsertModel<typeof employeesTable>;
