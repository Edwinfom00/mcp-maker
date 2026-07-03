import { redirect } from "next/navigation";

function RootPage() {
  redirect("/sign-in");
}

export default RootPage;
