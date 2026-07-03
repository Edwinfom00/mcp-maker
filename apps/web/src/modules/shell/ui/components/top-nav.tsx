"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { Avatar, Icon } from "@/modules/design-system";
import type { Workspace } from "@/modules/workspace/@types/workspace";
import { ThemeToggle } from "./theme-toggle";

interface TopNavProps {
  workspace: Workspace;
  userName: string;
  projectName?: string;
}

const NAV_ITEM_BASE =
  "flex h-8 shrink-0 items-center gap-[9px] rounded-md px-2.5 text-[13px] tracking-[-0.005em] whitespace-nowrap no-underline transition-colors";

function workspaceInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .filter((char) => char.length > 0)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TopNav({ workspace, userName, projectName }: TopNavProps) {
  const pathname = usePathname();
  const projectsActive = pathname.startsWith("/projects");

  return (
    <header className="flex h-[52px] shrink-0 items-center gap-1 border-b border-[#e2e5ea] bg-white px-4 dark:border-[#2a313b] dark:bg-[#0d1117]">
      <Link
        href="/projects"
        className="mr-2.5 flex shrink-0 items-center gap-2 no-underline"
      >
        <span className="flex size-[26px] items-center justify-center rounded-md bg-[#13161b] text-white dark:bg-[#e6edf3] dark:text-[#0d1117]">
          <Icon name="terminal" size={14} strokeWidth={2.25} />
        </span>
        <span className="text-[13.5px] font-bold tracking-[-0.02em] whitespace-nowrap text-[#0d1117] dark:text-[#e6edf3]">
          MCP Maker
        </span>
      </Link>

      <span className="mr-1.5 h-5 w-px shrink-0 bg-[#e2e5ea] dark:bg-[#2a313b]" />

      <Link
        href="/workspaces"
        aria-label={`Active workspace: ${workspace.name}. Switch workspace`}
        className="flex h-8 items-center gap-2 rounded-md py-0 pr-2 pl-1.5 no-underline transition-colors hover:bg-[#eff1f4] dark:hover:bg-[#1c232c]"
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-[5px] bg-[#13161b] text-[10px] font-bold text-white dark:bg-[#e6edf3] dark:text-[#0d1117]">
          {workspaceInitials(workspace.name)}
        </span>
        <span className="text-[13px] font-semibold whitespace-nowrap text-[#0d1117] dark:text-[#e6edf3]">
          {workspace.name}
        </span>
        <Icon
          name="chevronDown"
          size={13}
          className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
        />
      </Link>

      {projectName ? (
        <>
          <Icon
            name="slash"
            size={14}
            className="mx-0.5 shrink-0 text-[#8b949e] dark:text-[#636b74]"
          />
          <button
            type="button"
            className="flex h-8 items-center gap-[7px] rounded-md px-2 transition-colors hover:bg-[#eff1f4] dark:hover:bg-[#1c232c]"
          >
            <Icon
              name="gitBranch"
              size={14}
              className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
            />
            <span className="font-mono text-[13px] font-[550] whitespace-nowrap text-[#0d1117] dark:text-[#e6edf3]">
              {projectName}
            </span>
            <Icon
              name="chevronDown"
              size={13}
              className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
            />
          </button>
        </>
      ) : null}

      <span className="flex-1" />

      <nav className="flex items-center gap-0.5" aria-label="Primary">
        <Link
          href="/projects"
          aria-current={projectsActive ? "page" : undefined}
          className={cn(
            NAV_ITEM_BASE,
            projectsActive
              ? "bg-[#eff1f4] font-semibold text-[#0d1117] dark:bg-[#1c232c] dark:text-[#e6edf3]"
              : "font-medium text-[#656d76] hover:bg-[#eff1f4] hover:text-[#3d444d] dark:text-[#8b949e] dark:hover:bg-[#1c232c] dark:hover:text-[#b6bcc4]",
          )}
        >
          <Icon
            name="grid"
            size={15}
            strokeWidth={projectsActive ? 2.1 : 1.75}
          />
          Projects
        </Link>
        <Link
          href="/team"
          className={cn(
            NAV_ITEM_BASE,
            "font-medium text-[#656d76] hover:bg-[#eff1f4] hover:text-[#3d444d] dark:text-[#8b949e] dark:hover:bg-[#1c232c] dark:hover:text-[#b6bcc4]",
          )}
        >
          <Icon name="users" size={15} strokeWidth={1.75} />
          Team
        </Link>
      </nav>

      <span className="mx-2.5 h-5 w-px shrink-0 bg-[#e2e5ea] dark:bg-[#2a313b]" />

      <ThemeToggle />
      <Avatar name={userName} size="md" />
    </header>
  );
}
