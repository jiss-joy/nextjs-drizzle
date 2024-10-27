import { eq } from "drizzle-orm";
import { db } from "../drizzle-client";
import { employeesTable } from "../schemas/employees";

async function deleteEmployee(employeeId: string) {
  return db.delete(employeesTable).where(eq(employeesTable.id, employeeId));
}

export { deleteEmployee };
