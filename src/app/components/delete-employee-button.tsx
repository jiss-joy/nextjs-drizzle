"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { deleteEmployeeAction } from "../actions";

const DeleteEmployeeButton = ({ employeeId }: { employeeId: string }) => {
  const pathname = usePathname();
  const organizationId = pathname.split("/")[1];

  async function clickHandler() {
    await deleteEmployeeAction(organizationId, employeeId);
  }
  return (
    <Button onClick={clickHandler} variant="ghost">
      Delete
    </Button>
  );
};

export default DeleteEmployeeButton;
