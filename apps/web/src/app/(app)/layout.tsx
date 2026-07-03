import type { ReactNode } from "react";
import { requireSession } from "@/modules/auth/server/session";
import { AppShell } from "@/modules/shell/ui/components/app-shell";
import { getActiveWorkspace } from "@/modules/workspace/config/seed";

async function AppLayout({ children }: { children: ReactNode }) {
  const session = await requireSession();
  const workspace = getActiveWorkspace(session.activeWorkspaceId);
  return (
    <AppShell workspace={workspace} userName={session.user.name}>
      {children}
    </AppShell>
  );
}

export default AppLayout;
