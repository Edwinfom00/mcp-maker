import type { RiskLevel } from "@/modules/design-system";

export type ProjectStatus = "ready" | "validating" | "analyzing" | "failed";

export interface Project {
  id: string;
  workspaceId: string;
  name: string;
  repo: string;
  status: ProjectStatus;
  toolCount: number;
  highestRisk: RiskLevel;
  updatedLabel: string;
}

export interface ProjectStatusDescriptor {
  label: string;
  tone: "safe" | "caution" | "info" | "danger";
}

export const PROJECT_STATUS: Record<ProjectStatus, ProjectStatusDescriptor> = {
  ready: { label: "Ready", tone: "safe" },
  validating: { label: "Awaiting validation", tone: "caution" },
  analyzing: { label: "Analyzing", tone: "info" },
  failed: { label: "Analysis failed", tone: "danger" },
};
