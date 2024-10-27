import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { organizationsTable } from "./organizations";
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";

export const productsTable = pgTable("products", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(),
  price: integer(),
  organizationId: uuid()
    .notNull()
    .references(() => organizationsTable.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
});

export type SelectProductsType = InferSelectModel<typeof productsTable>;
export type InsertProductsType = InferInsertModel<typeof productsTable>;
