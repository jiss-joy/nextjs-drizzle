import { deleteExistingTables } from "./delete-existing-tables";
import {
  createDepartments,
  createEmployees,
  createOrganizations,
  createProducts,
} from "./queries";

async function main(replant = false) {
  if (replant) deleteExistingTables();

  console.log("[INFO] Seeding started...");
  console.log("[INFO] Creating Organizations...");
  const organizations = await createOrganizations();
  console.log("[INFO] Creating Departments...");
  const departments = await createDepartments(organizations);
  console.log("[INFO] Creating Employees...");
  await createEmployees(organizations, departments);
  console.log("[INFO] Creating Products...");
  await createProducts(organizations);
}

main(process.argv[2] === "true")
  .then(() => {
    console.log("[INFO] Seeding complete.");
    process.exit();
  })
  .catch((e: unknown) => {
    console.error("[Error] Seeding failed.", e);
    process.exit(1);
  });
