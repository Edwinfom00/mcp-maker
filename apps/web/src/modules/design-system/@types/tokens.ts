export type Tone = "safe" | "caution" | "danger" | "info" | "neutral";

export type RiskLevel = "readonly" | "write" | "destructive" | "blocked";

export interface RiskConfig {
  label: string;
  tone: Tone;
}
