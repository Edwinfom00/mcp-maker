import type { Metadata } from "next";
import { requireSession } from "@/modules/auth/server/session";
import { getWorkspaceProjects } from "@/modules/project/config/seed";
import { ProjectDashboardView } from "@/modules/project/ui/views/project-dashboard-view";
import { getActiveWorkspace } from "@/modules/workspace/config/seed";

export const metadata: Metadata = {
  title: "Projects · MCP Maker",
};

async function ProjectsPage() {
  const session = await requireSession();
  const workspace = getActiveWorkspace(session.activeWorkspaceId);
  const projects = getWorkspaceProjects(workspace.id);
  return (
    <ProjectDashboardView projects={projects} workspaceName={workspace.name} />
  );
}

export default ProjectsPage;
