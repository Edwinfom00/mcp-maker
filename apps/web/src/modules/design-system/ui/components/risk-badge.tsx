import { cn } from "@/lib/utils/cn";
import type { RiskLevel } from "../../@types/tokens";
import { RISK } from "../../config/risk";
import { TONE_BORDER, TONE_FG, TONE_SOFT_BG } from "../../config/tone-classes";
import { Icon } from "./icon";

const SIZE_CLASSES: Record<"sm" | "lg", string> = {
  sm: "h-[22px] px-2 text-[11.5px]",
  lg: "h-[26px] px-2.5 text-[12.5px]",
};

interface RiskBadgeProps {
  level: RiskLevel;
  size?: "sm" | "lg";
}

export function RiskBadge({ level, size = "sm" }: RiskBadgeProps) {
  const descriptor = RISK[level];
  const iconSize = size === "lg" ? 13 : 12;
  return (
    <span
      className={cn(
        "inline-flex w-max shrink-0 items-center gap-[5px] rounded-[5px] border font-semibold tracking-[-0.005em] whitespace-nowrap",
        SIZE_CLASSES[size],
        TONE_FG[descriptor.tone],
        TONE_SOFT_BG[descriptor.tone],
        TONE_BORDER[descriptor.tone],
      )}
    >
      <Icon name={descriptor.icon} size={iconSize} strokeWidth={2.25} />
      {descriptor.label}
    </span>
  );
}
