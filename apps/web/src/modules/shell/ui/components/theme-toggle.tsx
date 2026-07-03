"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/modules/design-system";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("mcp-theme", next ? "dark" : "light");
    } catch {
      // Persistence is best-effort; the toggle still applies for this session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="mr-2 flex size-[30px] cursor-pointer items-center justify-center rounded-md border border-[#e2e5ea] bg-[#eff1f4] text-[#3d444d] transition-colors hover:bg-[#e9ebef] dark:border-[#2a313b] dark:bg-[#1c232c] dark:text-[#b6bcc4] dark:hover:bg-[#232b35]"
    >
      <Icon name={isDark ? "moon" : "sun"} size={15} />
    </button>
  );
}
