"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { Icon, type IconName } from "./icon";

export interface SegmentOption {
  label: string;
  icon?: IconName;
}

interface SegmentedControlProps {
  label: string;
  options: SegmentOption[];
  defaultIndex?: number;
}

export function SegmentedControl({
  label,
  options,
  defaultIndex = 0,
}: SegmentedControlProps) {
  const [active, setActive] = useState(defaultIndex);
  const name = useId();
  return (
    <fieldset className="inline-flex gap-0.5 rounded-lg border border-[#e2e5ea] bg-[#eff1f4] p-[3px] dark:border-[#2a313b] dark:bg-[#1c232c]">
      <legend className="sr-only">{label}</legend>
      {options.map((option, index) => {
        const isActive = index === active;
        return (
          <label
            key={option.label}
            className={cn(
              "flex cursor-pointer items-center gap-[7px] rounded-md px-3.5 py-[7px] text-[13px] font-[560] tracking-[-0.005em] whitespace-nowrap transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#13161b] dark:has-[:focus-visible]:ring-[#e6edf3]",
              isActive
                ? "bg-white text-[#0d1117] shadow-[0_1px_2px_rgba(13,17,23,0.05)] dark:bg-[#0d1117] dark:text-[#e6edf3]"
                : "bg-transparent text-[#656d76] dark:text-[#8b949e]",
            )}
          >
            <input
              type="radio"
              name={name}
              className="sr-only"
              checked={isActive}
              onChange={() => setActive(index)}
            />
            {option.icon ? (
              <Icon name={option.icon} size={14} strokeWidth={2} />
            ) : null}
            {option.label}
          </label>
        );
      })}
    </fieldset>
  );
}
