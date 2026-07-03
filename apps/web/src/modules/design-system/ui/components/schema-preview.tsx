interface SchemaPreviewProps {
  json: string;
}

export function SchemaPreview({ json }: SchemaPreviewProps) {
  return (
    <pre className="m-0 overflow-auto rounded-lg border border-[#e2e5ea] bg-[#eff1f4] p-3.5 font-mono text-xs leading-[1.65] whitespace-pre text-[#3d444d] dark:border-[#2a313b] dark:bg-[#1c232c] dark:text-[#b6bcc4]">
      {json}
    </pre>
  );
}
