import type { Tone } from "../@types/tokens";

export const TONE_FG: Record<Tone, string> = {
  safe: "text-[#1a7f37] dark:text-[#3fb950]",
  caution: "text-[#9a6700] dark:text-[#d29922]",
  danger: "text-[#cf222e] dark:text-[#f85149]",
  info: "text-[#0969da] dark:text-[#58a6ff]",
  neutral: "text-[#3d444d] dark:text-[#b6bcc4]",
};

export const TONE_SOFT_BG: Record<Tone, string> = {
  safe: "bg-[#dafbe1] dark:bg-[#122117]",
  caution: "bg-[#fff8c5] dark:bg-[#241d0f]",
  danger: "bg-[#ffebe9] dark:bg-[#2a1516]",
  info: "bg-[#ddf4ff] dark:bg-[#0f1e2e]",
  neutral: "bg-[#eff1f4] dark:bg-[#1c232c]",
};

export const TONE_BORDER: Record<Tone, string> = {
  safe: "border-[#aceebb] dark:border-[#1f4b2a]",
  caution: "border-[#f1d67f] dark:border-[#4d3a12]",
  danger: "border-[#ffb2ac] dark:border-[#5c1f1f]",
  info: "border-[#b6e3ff] dark:border-[#1c3a54]",
  neutral: "border-[#e2e5ea] dark:border-[#2a313b]",
};

export const TONE_DOT_BG: Record<Tone, string> = {
  safe: "bg-[#1a7f37] dark:bg-[#3fb950]",
  caution: "bg-[#9a6700] dark:bg-[#d29922]",
  danger: "bg-[#cf222e] dark:bg-[#f85149]",
  info: "bg-[#0969da] dark:bg-[#58a6ff]",
  neutral: "bg-[#3d444d] dark:bg-[#b6bcc4]",
};
