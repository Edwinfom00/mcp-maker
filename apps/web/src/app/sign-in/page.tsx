import type { Metadata } from "next";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";

export const metadata: Metadata = {
  title: "Sign in · MCP Maker",
};

function SignInPage() {
  return <SignInView />;
}

export default SignInPage;
