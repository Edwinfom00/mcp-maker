import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CardPadding = "none" | "sm" | "md" | "lg" | "xl";

const PADDING_CLASSES: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-[18px]",
  lg: "p-5",
  xl: "p-[22px]",
};

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  padding?: CardPadding;
  tone?: "default" | "danger";
  filled?: boolean;
  children: ReactNode;
}

export function Card({
  padding = "lg",
  tone = "default",
  filled = false,
  children,
  ...rest
}: CardProps) {
  const borderClass =
    tone === "danger"
      ? "border-[#ffb2ac] dark:border-[#5c1f1f]"
      : "border-[#e2e5ea] dark:border-[#2a313b]";
  const backgroundClass =
    tone === "danger" && filled
      ? "bg-[#ffebe9] dark:bg-[#2a1516]"
      : "bg-white dark:bg-[#0d1117]";
  return (
    <div
      className={cn(
        "rounded-[10px] border",
        backgroundClass,
        borderClass,
        PADDING_CLASSES[padding],
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
