import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
import { Icon, type IconName } from "./icon";

interface FieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "id"> {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  icon?: IconName;
  prefix?: string;
  mono?: boolean;
}

export function Field({
  id,
  label,
  hint,
  error,
  icon,
  prefix,
  mono = false,
  type = "text",
  ...rest
}: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = errorId ?? hintId;
  return (
    <div className="flex w-full flex-col">
      <label
        htmlFor={id}
        className="mb-1.5 text-[12.5px] font-[560] text-[#3d444d] dark:text-[#b6bcc4]"
      >
        {label}
      </label>
      <div
        className={cn(
          "flex h-[38px] items-center gap-[9px] rounded-[7px] border-[1.5px] bg-white px-3 shadow-[0_1px_2px_rgba(13,17,23,0.05)] transition-colors focus-within:border-[#13161b] focus-within:shadow-[0_0_0_3px_#eef0f3] dark:bg-[#0d1117] dark:focus-within:border-[#e6edf3] dark:focus-within:shadow-[0_0_0_3px_#232b35]",
          error
            ? "border-[#cf222e] dark:border-[#f85149]"
            : "border-[#d0d5dd] dark:border-[#3a424d]",
        )}
      >
        {icon ? (
          <Icon
            name={icon}
            size={15}
            className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
          />
        ) : null}
        {prefix ? (
          <span className="shrink-0 font-mono text-[13px] text-[#8b949e] dark:text-[#636b74]">
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type={type}
          aria-invalid={error !== undefined}
          aria-describedby={describedBy}
          className={cn(
            "min-w-0 flex-1 border-0 bg-transparent text-[13.5px] text-[#0d1117] outline-none placeholder:text-[#8b949e] dark:text-[#e6edf3]",
            mono ? "font-mono" : "font-sans",
          )}
          {...rest}
        />
      </div>
      {error ? (
        <p
          id={errorId}
          className="mt-1.5 flex items-center gap-[5px] text-[11.5px] font-medium text-[#cf222e] dark:text-[#f85149]"
        >
          <Icon name="alertTriangle" size={12} strokeWidth={2} />
          {error}
        </p>
      ) : hint ? (
        <p
          id={hintId}
          className="mt-1.5 text-[11.5px] leading-[1.45] text-[#656d76] dark:text-[#8b949e]"
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
}
