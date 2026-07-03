import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "MCP Maker",
  description:
    "Security-first MCP server generation for TypeScript repositories.",
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("mcp-theme");if(t==="dark"||(t===null&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme init must run before paint to avoid a flash of the wrong color scheme */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-dvh bg-white font-sans text-[#0d1117] antialiased dark:bg-[#0d1117] dark:text-[#e6edf3]">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
