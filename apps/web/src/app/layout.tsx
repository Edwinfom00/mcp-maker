import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCP Maker",
  description:
    "Security-first MCP server generation for TypeScript repositories.",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
