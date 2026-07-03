import { cn } from "@/lib/utils/cn";
import { Icon } from "./icon";

export type StepStatus = "done" | "active" | "wait";

export interface Step {
  label: string;
  detail?: string;
  status: StepStatus;
  mono?: boolean;
}

const MARKER_CLASSES: Record<StepStatus, string> = {
  done: "bg-[#1a7f37] text-white dark:bg-[#3fb950]",
  active: "bg-[#13161b] text-white dark:bg-[#e6edf3] dark:text-[#0d1117]",
  wait: "border-[1.5px] border-[#e2e5ea] bg-white text-[#8b949e] dark:border-[#2a313b] dark:bg-[#0d1117] dark:text-[#636b74]",
};

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li className="flex gap-3.5" key={step.label}>
            <div className="flex flex-col items-center pt-0.5">
              <span
                className={cn(
                  "flex size-[22px] shrink-0 items-center justify-center rounded-full",
                  MARKER_CLASSES[step.status],
                )}
              >
                {step.status === "done" ? (
                  <Icon name="check" size={13} strokeWidth={3} />
                ) : step.status === "active" ? (
                  <Icon
                    name="refresh"
                    size={12}
                    strokeWidth={2.5}
                    className="animate-spin motion-reduce:animate-none"
                  />
                ) : (
                  <span className="font-mono text-[11px] font-bold">
                    {index + 1}
                  </span>
                )}
              </span>
              {!isLast ? (
                <span
                  className={cn(
                    "my-[3px] w-0.5 flex-1 min-h-[26px]",
                    step.status === "done"
                      ? "bg-[#1a7f37] dark:bg-[#3fb950]"
                      : "bg-[#e2e5ea] dark:bg-[#2a313b]",
                  )}
                />
              ) : null}
            </div>
            <div className={cn("flex-1", isLast ? "pb-0" : "pb-5")}>
              <div
                className={cn(
                  "text-[13.5px] font-semibold",
                  step.status === "wait"
                    ? "text-[#8b949e] dark:text-[#636b74]"
                    : "text-[#0d1117] dark:text-[#e6edf3]",
                )}
              >
                {step.label}
              </div>
              {step.detail ? (
                <div
                  className={cn(
                    "mt-[3px] text-xs leading-[1.5] text-[#656d76] dark:text-[#8b949e]",
                    step.mono === true && "font-mono",
                  )}
                >
                  {step.detail}
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
