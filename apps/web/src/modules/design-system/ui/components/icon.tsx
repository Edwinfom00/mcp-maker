import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuBox,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheck,
  LuCircleX,
  LuClock,
  LuCode,
  LuCopy,
  LuCpu,
  LuDatabase,
  LuDownload,
  LuEllipsis,
  LuExternalLink,
  LuEye,
  LuEyeOff,
  LuFileCode,
  LuFileText,
  LuFilter,
  LuFolder,
  LuGitBranch,
  LuGithub,
  LuHash,
  LuInfo,
  LuKey,
  LuLayers,
  LuLayoutGrid,
  LuListChecks,
  LuLock,
  LuLockOpen,
  LuLogOut,
  LuMail,
  LuMoon,
  LuPackage,
  LuPlay,
  LuPlus,
  LuRefreshCw,
  LuSearch,
  LuServer,
  LuShield,
  LuShieldCheck,
  LuSlash,
  LuSquarePen,
  LuSun,
  LuTerminal,
  LuTrash2,
  LuTriangleAlert,
  LuUser,
  LuUsers,
  LuX,
  LuZap,
} from "react-icons/lu";

export type IconName =
  | "github"
  | "folder"
  | "layers"
  | "shield"
  | "shieldCheck"
  | "alertTriangle"
  | "lock"
  | "unlock"
  | "gitBranch"
  | "package"
  | "terminal"
  | "database"
  | "server"
  | "key"
  | "code"
  | "copy"
  | "listChecks"
  | "search"
  | "plus"
  | "check"
  | "checkCircle"
  | "x"
  | "xCircle"
  | "info"
  | "chevronRight"
  | "chevronDown"
  | "chevronLeft"
  | "arrowRight"
  | "externalLink"
  | "download"
  | "eye"
  | "eyeOff"
  | "mail"
  | "user"
  | "users"
  | "logout"
  | "more"
  | "filter"
  | "trash"
  | "edit"
  | "refresh"
  | "clock"
  | "play"
  | "zap"
  | "fileCode"
  | "fileText"
  | "box"
  | "cpu"
  | "grid"
  | "sun"
  | "moon"
  | "hash"
  | "slash";

const REGISTRY: Record<IconName, IconType> = {
  github: LuGithub,
  folder: LuFolder,
  layers: LuLayers,
  shield: LuShield,
  shieldCheck: LuShieldCheck,
  alertTriangle: LuTriangleAlert,
  lock: LuLock,
  unlock: LuLockOpen,
  gitBranch: LuGitBranch,
  package: LuPackage,
  terminal: LuTerminal,
  database: LuDatabase,
  server: LuServer,
  key: LuKey,
  code: LuCode,
  copy: LuCopy,
  listChecks: LuListChecks,
  search: LuSearch,
  plus: LuPlus,
  check: LuCheck,
  checkCircle: LuCircleCheck,
  x: LuX,
  xCircle: LuCircleX,
  info: LuInfo,
  chevronRight: LuChevronRight,
  chevronDown: LuChevronDown,
  chevronLeft: LuChevronLeft,
  arrowRight: LuArrowRight,
  externalLink: LuExternalLink,
  download: LuDownload,
  eye: LuEye,
  eyeOff: LuEyeOff,
  mail: LuMail,
  user: LuUser,
  users: LuUsers,
  logout: LuLogOut,
  more: LuEllipsis,
  filter: LuFilter,
  trash: LuTrash2,
  edit: LuSquarePen,
  refresh: LuRefreshCw,
  clock: LuClock,
  play: LuPlay,
  zap: LuZap,
  fileCode: LuFileCode,
  fileText: LuFileText,
  box: LuBox,
  cpu: LuCpu,
  grid: LuLayoutGrid,
  sun: LuSun,
  moon: LuMoon,
  hash: LuHash,
  slash: LuSlash,
};

interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  title?: string;
}

export function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  className,
  title,
}: IconProps) {
  const Glyph = REGISTRY[name];
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...(title !== undefined ? { title } : {})}
    />
  );
}
