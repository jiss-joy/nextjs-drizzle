import { seedDb } from "../../drizzle-client";
import {
  departmentsTable,
  InsertDepartmentsType,
} from "../../schemas/departments";
import { SelectOrganizationsType } from "../../schemas/organizations";

const departmentsData: Omit<InsertDepartmentsType, "organizationId">[] = [
  {
    name: "Department 1",
  },
  {
    name: "Department 2",
  },
  {
    name: "Department 3",
  },
  {
    name: "Department 4",
  },
  {
    name: "Department 5",
  },
];

async function createDepartments(organizations: SelectOrganizationsType[]) {
  return seedDb
    .insert(departmentsTable)
    .values(
      departmentsData.map((department, index) => {
        return {
          ...department,
          organizationId: organizations[index % organizations.length].id,
        };
      })
    )
    .returning();
}

export { createDepartments };
