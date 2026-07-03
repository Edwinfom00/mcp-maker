import type { AuthSession } from "../@types/session";

const SEED_SESSION: AuthSession = {
  user: {
    id: "user_dana",
    name: "Dana Okoye",
    email: "dana@asterlabs.dev",
  },
  activeWorkspaceId: "ws_aster",
};

export async function getCurrentSession(): Promise<AuthSession | null> {
  return SEED_SESSION;
}

export async function requireSession(): Promise<AuthSession> {
  const session = await getCurrentSession();
  if (session === null) {
    throw new Error("A signed-in session is required to access this resource.");
  }
  return session;
}
