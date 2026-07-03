import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Icon, Pill } from "@/modules/design-system";
import type { Workspace } from "../../@types/workspace";

interface WorkspaceSelectViewProps {
  workspaces: Workspace[];
  activeWorkspaceId: string;
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .filter((char) => char.length > 0)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function WorkspaceSelectView({
  workspaces,
  activeWorkspaceId,
}: WorkspaceSelectViewProps) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-[#f6f7f9] px-6 py-16 dark:bg-[#151a21]">
      <span className="mb-5 flex size-[26px] items-center justify-center rounded-md bg-[#13161b] text-white dark:bg-[#e6edf3] dark:text-[#0d1117]">
        <Icon name="terminal" size={14} strokeWidth={2.25} />
      </span>
      <h1 className="m-0 text-[21px] font-[640] tracking-[-0.02em] text-[#0d1117] dark:text-[#e6edf3]">
        Choose a workspace
      </h1>
      <p className="mt-1.5 mb-7 text-center text-[13.5px] text-[#656d76] dark:text-[#8b949e]">
        Projects, generated servers, and audit history are scoped per workspace.
      </p>

      <div className="flex w-full max-w-[460px] flex-col gap-2.5">
        {workspaces.map((workspace) => {
          const selected = workspace.id === activeWorkspaceId;
          return (
            <Link
              key={workspace.id}
              href="/projects"
              aria-current={selected ? "true" : undefined}
              className={cn(
                "flex items-center gap-3.5 rounded-[10px] border-[1.5px] bg-white p-4 no-underline shadow-[0_1px_2px_rgba(13,17,23,0.05)] transition-colors dark:bg-[#0d1117]",
                selected
                  ? "border-[#13161b] shadow-[0_0_0_3px_#eef0f3] dark:border-[#e6edf3] dark:shadow-[0_0_0_3px_#232b35]"
                  : "border-[#e2e5ea] hover:border-[#d0d5dd] dark:border-[#2a313b] dark:hover:border-[#3a424d]",
              )}
            >
              <span className="flex size-[38px] shrink-0 items-center justify-center rounded-lg bg-[#13161b] text-[13px] font-bold text-white dark:bg-[#e6edf3] dark:text-[#0d1117]">
                {initials(workspace.name)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-semibold text-[#0d1117] dark:text-[#e6edf3]">
                  {workspace.name}
                </span>
                <span className="mt-0.5 block text-xs text-[#656d76] dark:text-[#8b949e]">
                  {workspace.role === "owner" ? "Owner" : "Member"} ·{" "}
                  {workspace.projectCount} projects
                </span>
              </span>
              <Pill tone="neutral" size="xs">
                {workspace.plan}
              </Pill>
              <Icon
                name="chevronRight"
                size={16}
                className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
              />
            </Link>
          );
        })}

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-[10px] border-[1.5px] border-dashed border-[#d0d5dd] bg-transparent p-4 text-left text-[#3d444d] transition-colors hover:border-[#13161b] dark:border-[#3a424d] dark:text-[#b6bcc4] dark:hover:border-[#e6edf3]"
        >
          <span className="flex size-[38px] shrink-0 items-center justify-center rounded-lg bg-[#eff1f4] dark:bg-[#1c232c]">
            <Icon name="plus" size={17} />
          </span>
          <span className="text-[13.5px] font-[550]">
            Create a new workspace
          </span>
        </button>
      </div>
    </div>
  );
}
