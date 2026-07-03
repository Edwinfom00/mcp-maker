import { cn } from "@/lib/utils/cn";
import type { IconName, Tone } from "@/modules/design-system";
import { Button, Field, Icon } from "@/modules/design-system";
import {
  TONE_FG,
  TONE_SOFT_BG,
} from "@/modules/design-system/config/tone-classes";

interface RiskRow {
  icon: IconName;
  tone: Extract<Tone, "safe" | "caution" | "danger">;
  label: string;
  body: string;
}

const RISK_ROWS: RiskRow[] = [
  {
    icon: "eye",
    tone: "safe",
    label: "Read-only tools",
    body: "Enabled by default — scanning, extraction, docs.",
  },
  {
    icon: "edit",
    tone: "caution",
    label: "Write tools",
    body: "Proposed, but disabled until you approve each one.",
  },
  {
    icon: "alertTriangle",
    tone: "danger",
    label: "Destructive tools",
    body: "Blocked by default. Never auto-enabled.",
  },
];

export function SignInView() {
  return (
    <div className="flex min-h-dvh w-full bg-white dark:bg-[#0d1117]">
      <div className="flex flex-1 flex-col px-6 py-8 md:flex-[0_0_45%] md:px-13 md:py-10">
        <div className="flex shrink-0 items-center gap-[9px]">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#13161b] text-white dark:bg-[#e6edf3] dark:text-[#0d1117]">
            <Icon name="terminal" size={15} strokeWidth={2.25} />
          </span>
          <span className="text-[14.5px] font-bold tracking-[-0.02em] text-[#0d1117] dark:text-[#e6edf3]">
            MCP Maker
          </span>
        </div>

        <div className="mx-auto flex w-full max-w-[360px] flex-1 flex-col justify-center">
          <h1 className="m-0 text-[25px] font-[650] tracking-[-0.025em] text-[#0d1117] dark:text-[#e6edf3]">
            Sign in
          </h1>
          <p className="mt-2 text-[13.5px] leading-[1.55] text-[#3d444d] dark:text-[#b6bcc4]">
            Turn a repository into a reviewed MCP server.
          </p>

          <form className="mt-6 flex flex-col gap-2.5">
            <Button variant="primary" size="lg" icon="github" fullWidth>
              Continue with GitHub
            </Button>

            <div className="my-1.5 flex items-center gap-2.5">
              <span className="h-px flex-1 bg-[#e2e5ea] dark:bg-[#2a313b]" />
              <span className="text-[11px] font-[550] text-[#8b949e] dark:text-[#636b74]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#e2e5ea] dark:bg-[#2a313b]" />
            </div>

            <Field
              id="sign-in-email"
              label="Work email"
              icon="mail"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
            />
            <Field
              id="sign-in-password"
              label="Password"
              icon="key"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Your password"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              iconRight="arrowRight"
              fullWidth
            >
              Sign in
            </Button>
          </form>

          <div className="mt-[22px] flex gap-[9px] rounded-lg border border-[#e2e5ea] bg-[#eff1f4] p-3 dark:border-[#2a313b] dark:bg-[#1c232c]">
            <Icon
              name="shield"
              size={15}
              strokeWidth={1.75}
              className="mt-px shrink-0 text-[#656d76] dark:text-[#8b949e]"
            />
            <p className="text-xs leading-[1.5] text-[#656d76] dark:text-[#8b949e]">
              Auth via Better Auth. We only request read access to public
              repositories by default.
            </p>
          </div>
        </div>

        <p className="text-[11.5px] text-[#8b949e] dark:text-[#636b74]">
          © 2026 MCP Maker · SOC2 in progress
        </p>
      </div>

      <div className="hidden flex-1 flex-col justify-center border-l border-[#e2e5ea] bg-[#f6f7f9] px-13 py-12 md:flex dark:border-[#2a313b] dark:bg-[#151a21]">
        <div className="max-w-[460px]">
          <span className="mb-[18px] inline-flex items-center gap-[7px] rounded-full border border-[#e2e5ea] bg-white px-2.5 py-[5px] text-[11.5px] font-[560] text-[#3d444d] dark:border-[#2a313b] dark:bg-[#0d1117] dark:text-[#b6bcc4]">
            <Icon name="lock" size={13} />
            Read-only by default
          </span>
          <h2 className="m-0 text-[26px] font-[640] leading-[1.25] tracking-[-0.025em] text-[#0d1117] dark:text-[#e6edf3]">
            Repository in. Reviewed MCP server out. Nothing runs without your
            sign-off.
          </h2>
          <div className="mt-7 flex flex-col gap-3">
            {RISK_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex items-start gap-3 rounded-[10px] border border-[#e2e5ea] bg-white p-3.5 dark:border-[#2a313b] dark:bg-[#0d1117]"
              >
                <span
                  className={cn(
                    "flex size-[30px] shrink-0 items-center justify-center rounded-[7px]",
                    TONE_FG[row.tone],
                    TONE_SOFT_BG[row.tone],
                  )}
                >
                  <Icon name={row.icon} size={15} strokeWidth={2} />
                </span>
                <div>
                  <div className="text-[13.5px] font-semibold text-[#0d1117] dark:text-[#e6edf3]">
                    {row.label}
                  </div>
                  <div className="mt-0.5 text-[12.5px] leading-[1.45] text-[#656d76] dark:text-[#8b949e]">
                    {row.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
