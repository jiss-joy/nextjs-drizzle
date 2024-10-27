import { selectOrganizations } from "@/db/queries/select-organizations";
import { redirect } from "next/navigation";

export default async function Home() {
  const organizations = await selectOrganizations();

  redirect(`/${organizations[0].id}`);
}
