export type WorkspaceRole = "owner" | "member";

export type WorkspacePlan = "Free" | "Team";

export interface Workspace {
  id: string;
  name: string;
  role: WorkspaceRole;
  projectCount: number;
  plan: WorkspacePlan;
}
