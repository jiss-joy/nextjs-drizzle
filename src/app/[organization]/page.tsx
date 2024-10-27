import { selectEmployees } from "@/db/queries/select-employees";
import Link from "next/link";
import CreateEmployeeButton from "../components/create-employee-button";
import DeleteEmployeeButton from "../components/delete-employee-button";
import { selectDepartments } from "@/db/queries/select-departments";
import { selectOrganizations } from "@/db/queries/select-organizations";
import { selectProducts } from "@/db/queries/select-products";

const OrganizationDetails = async ({
  params,
}: {
  params: Promise<{ organization: string }>;
}) => {
  const { organization } = await params;
  let organizationName = "";
  const organizations = await selectOrganizations();
  const employees = await selectEmployees(organization);
  const departments = await selectDepartments(organization);
  const products = await selectProducts(organization);
  if (employees) {
    organizationName = employees[0]?.organizationName;
  }

  return (
    <div className="w-full px-8 py-8">
      <div className="w-full items-end justify-between flex flex-row space-x-4">
        <h1 className="text-xl font-semibold">
          Organization: {organizationName}
        </h1>
        <div className="space-x-4">
          {organizations.map((org) => (
            <Link
              key={org.id}
              href={`/${org.id}`}
              className="bg-slate-200 rounded-md px-4 py-2 hover:bg-slate-900 hover:text-white transition-colors"
            >
              {org.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-2">
        <div className="flex w-full justify-between items-center mt-4">
          <h1 className="text-xl font-bold">Departments</h1>
        </div>
        {departments.map((department) => (
          <div
            key={department.id}
            className="flex flex-row p-4 bg-slate-100 py-2 rounded-sm px-4 w-full items-end justify-between"
          >
            <h2 className="text-md font-normal">{department.name}</h2>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex w-full justify-between items-center mt-4">
          <h1 className="text-xl font-bold">Employees</h1>{" "}
          <CreateEmployeeButton />
        </div>
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-row p-4 border-b w-full items-end justify-between"
          >
            <div className="flex flex-col">
              <h2 className="text-md font-semibold">{employee.name}</h2>
              <p className="text-gray-500">{employee.email}</p>
              <p className="text-gray-500">{employee.departmentName}</p>
            </div>
            <DeleteEmployeeButton employeeId={employee.id} />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex w-full justify-between items-center mt-4">
          <h1 className="text-xl font-bold">Products</h1>
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row p-4 border-b w-full items-end justify-between"
          >
            <div className="flex flex-col">
              <h2 className="text-md font-semibold">{product.name}</h2>
              <p className="text-gray-500">¥{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationDetails;
