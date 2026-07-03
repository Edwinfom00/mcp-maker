import type { Workspace } from "../@types/workspace";

export const SEED_WORKSPACES: Workspace[] = [
  {
    id: "ws_aster",
    name: "Aster Labs",
    role: "owner",
    projectCount: 12,
    plan: "Team",
  },
  {
    id: "ws_personal",
    name: "Personal",
    role: "owner",
    projectCount: 3,
    plan: "Free",
  },
  {
    id: "ws_northwind",
    name: "Northwind Labs",
    role: "member",
    projectCount: 7,
    plan: "Team",
  },
];

export function findWorkspace(id: string): Workspace | undefined {
  return SEED_WORKSPACES.find((workspace) => workspace.id === id);
}

export function getActiveWorkspace(id: string): Workspace {
  const workspace = findWorkspace(id);
  const fallback = SEED_WORKSPACES[0];
  if (workspace === undefined && fallback === undefined) {
    throw new Error("No workspaces are configured.");
  }
  return workspace ?? (fallback as Workspace);
}
