import type { RiskLevel } from "../@types/tokens";
import type { IconName } from "../ui/components/icon";

interface RiskDescriptor {
  label: string;
  icon: IconName;
  tone: "safe" | "caution" | "danger";
}

export const RISK: Record<RiskLevel, RiskDescriptor> = {
  readonly: { label: "Read-only", icon: "eye", tone: "safe" },
  write: { label: "Write", icon: "edit", tone: "caution" },
  destructive: { label: "Destructive", icon: "alertTriangle", tone: "danger" },
  blocked: { label: "Blocked", icon: "lock", tone: "danger" },
};
