import { seedDb } from "../../drizzle-client";
import { SelectOrganizationsType } from "../../schemas/organizations";
import { InsertProductsType, productsTable } from "../../schemas/products";

const productsData: Omit<InsertProductsType, "organizationId">[] = [
  {
    name: "Product 1",
    price: 100,
  },
  {
    name: "Product 2",
    price: 200,
  },
  {
    name: "Product 3",
    price: 300,
  },
  {
    name: "Product 4",
    price: 400,
  },
  {
    name: "Product 5",
    price: 500,
  },
];

async function createProducts(organizations: SelectOrganizationsType[]) {
  return seedDb
    .insert(productsTable)
    .values(
      productsData.map((product, index) => ({
        ...product,
        organizationId: organizations[index % organizations.length].id,
      }))
    )
    .returning();
}

export { createProducts };
