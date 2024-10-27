"use server";

import { eq } from "drizzle-orm";
import { db } from "../drizzle-client";
import { productsTable, SelectProductsType } from "../schemas/products";

async function selectProducts(
  organizationId: string
): Promise<SelectProductsType[]> {
  return db
    .select()
    .from(productsTable)
    .where(eq(productsTable.organizationId, organizationId));
}

export { selectProducts };
