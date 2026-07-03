import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { Icon, type IconName } from "./icon";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "dangerSolid";

export type ButtonSize = "sm" | "md" | "lg";

const BASE_CLASSES =
  "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md border font-sans font-[560] tracking-[-0.005em] whitespace-nowrap no-underline transition-colors disabled:cursor-not-allowed disabled:opacity-45 disabled:shadow-none";

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-7 px-2.5 text-[12.5px] gap-1.5",
  md: "h-[34px] px-3.5 text-[13.5px] gap-[7px]",
  lg: "h-[42px] px-5 text-[14.5px] gap-2",
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-[#13161b] text-white border-[#13161b] shadow-[0_1px_2px_rgba(13,17,23,0.05)] hover:bg-black hover:border-black dark:bg-[#e6edf3] dark:text-[#0d1117] dark:border-[#e6edf3] dark:hover:bg-white dark:hover:border-white",
  secondary:
    "bg-white text-[#0d1117] border-[#d0d5dd] hover:bg-[#f6f7f9] dark:bg-[#0d1117] dark:text-[#e6edf3] dark:border-[#3a424d] dark:hover:bg-[#151a21]",
  ghost:
    "bg-transparent text-[#3d444d] border-transparent hover:bg-[#eff1f4] dark:text-[#b6bcc4] dark:hover:bg-[#1c232c]",
  danger:
    "bg-white text-[#cf222e] border-[#ffb2ac] hover:bg-[#ffebe9] dark:bg-[#0d1117] dark:text-[#f85149] dark:border-[#5c1f1f] dark:hover:bg-[#2a1516]",
  dangerSolid:
    "bg-[#cf222e] text-white border-[#cf222e] dark:bg-[#f85149] dark:border-[#f85149]",
};

export function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  fullWidth: boolean,
): string {
  return cn(
    BASE_CLASSES,
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    fullWidth ? "w-full" : "w-max",
  );
}

export function buttonGlyphSize(size: ButtonSize): number {
  return size === "sm" ? 13 : 15;
}

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  fullWidth = false,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const glyphSize = buttonGlyphSize(size);
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, fullWidth)}
      {...rest}
    >
      {icon ? <Icon name={icon} size={glyphSize} strokeWidth={2} /> : null}
      {children}
      {iconRight ? (
        <Icon name={iconRight} size={glyphSize} strokeWidth={2} />
      ) : null}
    </button>
  );
}
