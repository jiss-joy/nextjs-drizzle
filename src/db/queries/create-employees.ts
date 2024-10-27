"use server";

import { getTableColumns } from "drizzle-orm";
import { db } from "../drizzle-client";
import {
  employeesTable,
  InsertEmployeesType,
  SelectEmployeesType,
} from "../schemas/employees";

async function createEmployee(
  employeeData: InsertEmployeesType
): Promise<SelectEmployeesType[]> {
  return db
    .insert(employeesTable)
    .values(employeeData)
    .returning(getTableColumns(employeesTable));
}

export { createEmployee };
