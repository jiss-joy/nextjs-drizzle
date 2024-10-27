"use server";

import { eq, getTableColumns } from "drizzle-orm";
import { db } from "../drizzle-client";
import { employeesTable } from "../schemas/employees";
import { departmentsTable } from "../schemas/departments";
import { organizationsTable } from "../schemas/organizations";

async function selectEmployees(organizationId: string) {
  return db
    .select({
      ...getTableColumns(employeesTable),
      departmentName: departmentsTable.name,
      organizationName: organizationsTable.name,
    })
    .from(employeesTable)
    .innerJoin(
      departmentsTable,
      eq(employeesTable.departmentId, departmentsTable.id)
    )
    .innerJoin(
      organizationsTable,
      eq(employeesTable.organizationId, organizationsTable.id)
    )
    .where(eq(employeesTable.organizationId, organizationId));
}

export { selectEmployees };
