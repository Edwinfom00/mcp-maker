import { cn } from "@/lib/utils/cn";

const SIZE_CLASSES: Record<"sm" | "md" | "lg", string> = {
  sm: "size-[26px] text-[10.5px]",
  md: "size-[30px] text-xs",
  lg: "size-[38px] text-[15px]",
};

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

function initialsFrom(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .filter((char) => char.length > 0)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, size = "md" }: AvatarProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-[#13161b] font-semibold tracking-[-0.02em] text-white select-none dark:bg-[#e6edf3] dark:text-[#0d1117]",
        SIZE_CLASSES[size],
      )}
    >
      {initialsFrom(name)}
    </span>
  );
}
