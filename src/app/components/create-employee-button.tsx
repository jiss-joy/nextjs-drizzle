"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { createEmployeeAction } from "../actions";
import { usePathname } from "next/navigation";

const CreateEmployeeButton = () => {
  const pathname = usePathname();
  const organization = pathname.split("/")[1];

  async function clickHandler() {
    await createEmployeeAction(organization);
  }
  return <Button onClick={clickHandler}>Create Employee</Button>;
};

export default CreateEmployeeButton;
