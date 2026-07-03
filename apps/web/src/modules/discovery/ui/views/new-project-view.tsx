import {
  Button,
  ButtonLink,
  Card,
  Field,
  Icon,
  Pill,
  SegmentedControl,
} from "@/modules/design-system";

export function NewProjectView() {
  return (
    <div className="flex justify-center px-6 py-12">
      <div className="w-full max-w-[640px]">
        <div className="mb-[22px]">
          <h1 className="text-[20px] font-[650] tracking-[-0.02em] text-[#0d1117] dark:text-[#e6edf3]">
            New project
          </h1>
          <p className="mt-1 text-[13px] text-[#656d76] dark:text-[#8b949e]">
            Point at a public repository. We only read code you already have
            access to.
          </p>
        </div>

        <Card padding="xl">
          <Field
            id="repo-url"
            label="GitHub repository URL"
            icon="github"
            mono
            type="url"
            name="repositoryUrl"
            placeholder="https://github.com/aster/stripe-webhook-router"
          />

          <div className="mt-5">
            <div className="mb-2 text-[12.5px] font-[560] text-[#3d444d] dark:text-[#b6bcc4]">
              Server mode
            </div>
            <SegmentedControl
              label="Server mode"
              defaultIndex={0}
              options={[
                { label: "Read-only", icon: "eye" },
                { label: "Read & write", icon: "edit" },
                { label: "Full access", icon: "unlock" },
              ]}
            />
            <p className="mt-[9px] text-xs leading-[1.5] text-[#656d76] dark:text-[#8b949e]">
              Read-only exposes only inspection tools. Write and full access
              still require per-tool approval later — this only sets which
              candidates are proposed.
            </p>
          </div>

          <div className="mt-5 rounded-lg border border-[#e2e5ea] bg-[#eff1f4] p-3.5 dark:border-[#2a313b] dark:bg-[#1c232c]">
            <div className="mb-2 flex items-center gap-[7px] text-[12.5px] font-semibold text-[#0d1117] dark:text-[#e6edf3]">
              <Icon
                name="fileCode"
                size={14}
                className="text-[#656d76] dark:text-[#8b949e]"
              />
              Detected on preview
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill tone="info" size="xs">
                TypeScript
              </Pill>
              <Pill tone="neutral" size="xs">
                Express
              </Pill>
              <Pill tone="neutral" size="xs">
                Prisma
              </Pill>
              <Pill tone="neutral" size="xs">
                142 files
              </Pill>
            </div>
          </div>

          <div className="mt-[22px] flex justify-end gap-2.5">
            <ButtonLink href="/projects" variant="secondary">
              Cancel
            </ButtonLink>
            <Button variant="primary" icon="zap">
              Analyze repository
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
