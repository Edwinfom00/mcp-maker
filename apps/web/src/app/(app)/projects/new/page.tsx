import type { Metadata } from "next";
import { NewProjectView } from "@/modules/discovery/ui/views/new-project-view";

export const metadata: Metadata = {
  title: "New project · MCP Maker",
};

function NewProjectPage() {
  return <NewProjectView />;
}

export default NewProjectPage;
