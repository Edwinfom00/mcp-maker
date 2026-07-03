import type { Project } from "../@types/project";

export const SEED_PROJECTS: Project[] = [
  {
    id: "prj_stripe_webhook_router",
    workspaceId: "ws_aster",
    name: "stripe-webhook-router",
    repo: "aster/stripe-webhook-router",
    status: "ready",
    toolCount: 8,
    highestRisk: "write",
    updatedLabel: "12 min ago",
  },
  {
    id: "prj_internal_crm_api",
    workspaceId: "ws_aster",
    name: "internal-crm-api",
    repo: "aster/internal-crm-api",
    status: "validating",
    toolCount: 6,
    highestRisk: "destructive",
    updatedLabel: "1 h ago",
  },
  {
    id: "prj_docs_search_service",
    workspaceId: "ws_aster",
    name: "docs-search-service",
    repo: "aster/docs-search",
    status: "analyzing",
    toolCount: 0,
    highestRisk: "readonly",
    updatedLabel: "3 min ago",
  },
  {
    id: "prj_billing_sync",
    workspaceId: "ws_aster",
    name: "billing-sync",
    repo: "aster/billing-sync",
    status: "ready",
    toolCount: 5,
    highestRisk: "readonly",
    updatedLabel: "2 days ago",
  },
  {
    id: "prj_legacy_user_service",
    workspaceId: "ws_aster",
    name: "legacy-user-service",
    repo: "aster/legacy-user-service",
    status: "failed",
    toolCount: 0,
    highestRisk: "blocked",
    updatedLabel: "5 days ago",
  },
];

export function getWorkspaceProjects(workspaceId: string): Project[] {
  return SEED_PROJECTS.filter((project) => project.workspaceId === workspaceId);
}
