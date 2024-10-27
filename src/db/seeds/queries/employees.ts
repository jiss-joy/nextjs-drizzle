import { seedDb } from "../../drizzle-client";
import { SelectDepartmentsType } from "../../schemas/departments";
import { employeesTable, InsertEmployeesType } from "../../schemas/employees";
import { SelectOrganizationsType } from "../../schemas/organizations";

const employeesData: Omit<
  InsertEmployeesType,
  "organizationId" | "departmentId"
>[] = [
  {
    name: "Jake",
    email: "jake@test.com",
  },
  {
    name: "John",
    email: "john@test.com",
  },
  {
    name: "Jane",
    email: "jane@test.com",
  },
  {
    name: "Jill",
    email: "jill@test.com",
  },
  {
    name: "Jack",
    email: "jack@test.com",
  },
];

async function createEmployees(
  organizations: SelectOrganizationsType[],
  departments: SelectDepartmentsType[]
) {
  return seedDb
    .insert(employeesTable)
    .values(
      employeesData.map((employee, index) => ({
        ...employee,
        organizationId: organizations[index % organizations.length].id,
        departmentId: departments[index % departments.length].id,
      }))
    )
    .returning();
}

export { createEmployees };
