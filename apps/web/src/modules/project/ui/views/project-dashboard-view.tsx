import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import {
  Button,
  ButtonLink,
  Icon,
  Pill,
  RiskBadge,
} from "@/modules/design-system";
import { PROJECT_STATUS, type Project } from "../../@types/project";

interface ProjectDashboardViewProps {
  projects: Project[];
  workspaceName: string;
}

const GRID = "grid-cols-[1.6fr_130px_80px_120px_100px_32px]";

export function ProjectDashboardView({
  projects,
  workspaceName,
}: ProjectDashboardViewProps) {
  return (
    <div className="mx-auto max-w-[1100px] px-7 pt-[22px] pb-10">
      <div className="mb-[18px] flex items-center justify-between gap-4">
        <div>
          <h1 className="text-[20px] font-[650] tracking-[-0.02em] text-[#0d1117] dark:text-[#e6edf3]">
            Projects
          </h1>
          <p className="mt-[3px] text-[13px] text-[#656d76] dark:text-[#8b949e]">
            {projects.length} repositories imported into {workspaceName}
          </p>
        </div>
        <ButtonLink href="/projects/new" variant="primary" icon="plus">
          New project
        </ButtonLink>
      </div>

      <div className="mb-[18px] flex gap-2.5">
        <div className="flex h-[34px] flex-1 items-center gap-2 rounded-[7px] border border-[#e2e5ea] bg-white px-3 dark:border-[#2a313b] dark:bg-[#0d1117]">
          <Icon
            name="search"
            size={14}
            className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
          />
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Search projects…"
            className="min-w-0 flex-1 border-0 bg-transparent text-[13px] text-[#0d1117] outline-none placeholder:text-[#8b949e] dark:text-[#e6edf3]"
          />
        </div>
        <Button variant="secondary" icon="filter">
          Filter
        </Button>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-[#e2e5ea] bg-white max-md:hidden dark:border-[#2a313b] dark:bg-[#0d1117]">
        <div
          className={cn(
            "grid items-center gap-3.5 border-b border-[#e2e5ea] bg-[#f6f7f9] px-[18px] py-2.5 text-[11px] font-semibold tracking-[0.03em] text-[#656d76] uppercase dark:border-[#2a313b] dark:bg-[#151a21] dark:text-[#8b949e]",
            GRID,
          )}
        >
          <div>Project</div>
          <div>Status</div>
          <div className="text-center">Tools</div>
          <div>Highest risk</div>
          <div>Updated</div>
          <div />
        </div>
        {projects.map((project, index) => {
          const status = PROJECT_STATUS[project.status];
          const isLast = index === projects.length - 1;
          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={cn(
                "grid items-center gap-3.5 px-[18px] py-[13px] no-underline transition-colors hover:bg-[#f6f7f9] dark:hover:bg-[#151a21]",
                GRID,
                !isLast && "border-b border-[#e2e5ea] dark:border-[#2a313b]",
                project.status === "failed" &&
                  "bg-[rgba(207,34,46,0.03)] dark:bg-[rgba(248,81,73,0.05)]",
              )}
            >
              <div className="min-w-0">
                <div className="text-[13.5px] font-semibold text-[#0d1117] dark:text-[#e6edf3]">
                  {project.name}
                </div>
                <div className="mt-0.5 flex items-center gap-[5px] font-mono text-[11.5px] text-[#656d76] dark:text-[#8b949e]">
                  <Icon name="github" size={11} />
                  {project.repo}
                </div>
              </div>
              <div>
                <Pill tone={status.tone} size="xs" dot>
                  {status.label}
                </Pill>
              </div>
              <div className="text-center font-mono text-[13px] font-semibold text-[#0d1117] dark:text-[#e6edf3]">
                {project.toolCount > 0 ? project.toolCount : "—"}
              </div>
              <div>
                {project.toolCount > 0 ? (
                  <RiskBadge level={project.highestRisk} />
                ) : (
                  <span className="text-xs text-[#8b949e] dark:text-[#636b74]">
                    —
                  </span>
                )}
              </div>
              <div className="font-mono text-xs text-[#656d76] dark:text-[#8b949e]">
                {project.updatedLabel}
              </div>
              <Icon
                name="chevronRight"
                size={16}
                className="text-[#8b949e] dark:text-[#636b74]"
              />
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-2.5 md:hidden">
        {projects.map((project) => {
          const status = PROJECT_STATUS[project.status];
          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="rounded-[10px] border border-[#e2e5ea] bg-white p-3.5 no-underline dark:border-[#2a313b] dark:bg-[#0d1117]"
            >
              <div className="font-mono text-[13.5px] font-[620] text-[#0d1117] dark:text-[#e6edf3]">
                {project.name}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill tone={status.tone} size="xs" dot>
                  {status.label}
                </Pill>
                {project.toolCount > 0 ? (
                  <RiskBadge level={project.highestRisk} />
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
