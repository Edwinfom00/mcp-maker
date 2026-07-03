import type { Metadata } from "next";
import { requireSession } from "@/modules/auth/server/session";
import { SEED_WORKSPACES } from "@/modules/workspace/config/seed";
import { WorkspaceSelectView } from "@/modules/workspace/ui/views/workspace-select-view";

export const metadata: Metadata = {
  title: "Workspaces · MCP Maker",
};

async function WorkspacesPage() {
  const session = await requireSession();
  return (
    <WorkspaceSelectView
      workspaces={SEED_WORKSPACES}
      activeWorkspaceId={session.activeWorkspaceId}
    />
  );
}

export default WorkspacesPage;
