"use server";

import { eq } from "drizzle-orm";
import { db } from "../drizzle-client";
import {
  departmentsTable,
  SelectDepartmentsType,
} from "../schemas/departments";

async function selectDepartments(
  organizationId: string
): Promise<SelectDepartmentsType[]> {
  return db
    .select()
    .from(departmentsTable)
    .where(eq(departmentsTable.organizationId, organizationId));
}

export { selectDepartments };
