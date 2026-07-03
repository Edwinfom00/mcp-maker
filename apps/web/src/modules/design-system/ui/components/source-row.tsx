import { Icon } from "./icon";

interface SourceRowProps {
  path: string;
  lines?: string;
}

export function SourceRow({ path, lines }: SourceRowProps) {
  return (
    <span className="inline-flex w-max max-w-full items-center gap-[7px] rounded-md border border-[#e2e5ea] bg-[#eff1f4] px-2.5 py-[5px] font-mono text-[11.5px] text-[#3d444d] dark:border-[#2a313b] dark:bg-[#1c232c] dark:text-[#b6bcc4]">
      <Icon
        name="fileCode"
        size={13}
        className="shrink-0 text-[#8b949e] dark:text-[#636b74]"
      />
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {path}
      </span>
      {lines ? (
        <span className="shrink-0 text-[#8b949e] dark:text-[#636b74]">
          :{lines}
        </span>
      ) : null}
    </span>
  );
}
