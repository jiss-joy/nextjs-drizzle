"use server";

import { createEmployee } from "@/db/queries/create-employees";
import { deleteEmployee } from "@/db/queries/delete-employee";
import { selectDepartments } from "@/db/queries/select-departments";
import { InsertEmployeesType } from "@/db/schemas/employees";
import { revalidatePath } from "next/cache";

const randomNameWithEmails = [
  { name: "John Doe", email: "johnDoe@test.com" },
  { name: "Judy", email: "judy@test.com" },
  { name: "Jane", email: "jane@test.com" },
  { name: "Jack", email: "jack@test.com" },
  { name: "Jill", email: "jill@test.com" },
  { name: "James", email: "james@test.com" },
  { name: "Jenny", email: "jenny@test.com" },
  { name: "Joe", email: "jow@test.com" },
  { name: "Jesse", email: "jesse@test.com" },
  { name: "Jasmine", email: "jasmine@test.com" },
  { name: "Jasper", email: "jasper@test.com" },
  { name: "Jared", email: "jared@test.com" },
];

async function createEmployeeAction(organizationId: string) {
  const departments = await selectDepartments(organizationId);

  const employee: InsertEmployeesType = {
    ...randomNameWithEmails[
      Math.floor(Math.random() * randomNameWithEmails.length)
    ],
    organizationId,
    departmentId: departments[0].id,
  };
  try {
    await createEmployee(employee);
    revalidatePath(`/${organizationId}`);

    return employee;
  } catch (err) {
    console.error(err);
  }
}

async function deleteEmployeeAction(
  organizationId: string,
  employeeId: string
) {
  await deleteEmployee(employeeId);
  revalidatePath(`/${organizationId}`);
}

export { createEmployeeAction, deleteEmployeeAction };
