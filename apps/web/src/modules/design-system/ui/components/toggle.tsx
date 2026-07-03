"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface ToggleProps {
  label: string;
  defaultOn?: boolean;
  disabled?: boolean;
}

export function Toggle({
  label,
  defaultOn = false,
  disabled = false,
}: ToggleProps) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={() => setOn((prev) => !prev)}
      className={cn(
        "inline-flex h-5 w-[34px] shrink-0 cursor-pointer items-center rounded-full border-0 p-0.5 transition-colors disabled:cursor-not-allowed disabled:opacity-55",
        on
          ? "bg-[#13161b] dark:bg-[#e6edf3]"
          : "bg-[#d0d5dd] dark:bg-[#3a424d]",
      )}
    >
      <span
        className={cn(
          "size-4 rounded-full bg-white transition-transform dark:bg-[#0d1117]",
          on ? "translate-x-[14px]" : "translate-x-0",
        )}
      />
    </button>
  );
}
