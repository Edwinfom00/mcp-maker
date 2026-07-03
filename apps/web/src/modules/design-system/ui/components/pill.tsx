import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import type { Tone } from "../../@types/tokens";
import { TONE_DOT_BG, TONE_FG, TONE_SOFT_BG } from "../../config/tone-classes";

const SIZE_CLASSES: Record<"xs" | "sm", string> = {
  xs: "h-[18px] px-1.5 text-[10.5px]",
  sm: "h-[22px] px-2 text-[11.5px]",
};

interface PillProps {
  children: ReactNode;
  tone?: Tone;
  size?: "xs" | "sm";
  dot?: boolean;
}

export function Pill({
  children,
  tone = "neutral",
  size = "sm",
  dot = false,
}: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex w-max shrink-0 items-center gap-[5px] rounded-full font-[560] tracking-[-0.005em] whitespace-nowrap",
        SIZE_CLASSES[size],
        TONE_FG[tone],
        TONE_SOFT_BG[tone],
      )}
    >
      {dot ? (
        <span
          className={cn("size-[5px] shrink-0 rounded-full", TONE_DOT_BG[tone])}
        />
      ) : null}
      {children}
    </span>
  );
}
