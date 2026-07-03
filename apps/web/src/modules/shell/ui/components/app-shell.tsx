import type { ReactNode } from "react";
import type { Workspace } from "@/modules/workspace/@types/workspace";
import { TopNav } from "./top-nav";

interface AppShellProps {
  workspace: Workspace;
  userName: string;
  projectName?: string;
  children: ReactNode;
}

export function AppShell({
  workspace,
  userName,
  projectName,
  children,
}: AppShellProps) {
  return (
    <div className="flex h-dvh flex-col bg-white text-[#0d1117] dark:bg-[#0d1117] dark:text-[#e6edf3]">
      <TopNav
        workspace={workspace}
        userName={userName}
        {...(projectName !== undefined ? { projectName } : {})}
      />
      <main className="flex-1 overflow-auto bg-[#f6f7f9] dark:bg-[#151a21]">
        {children}
      </main>
    </div>
  );
}
