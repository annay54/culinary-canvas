// @types/next-auth.d.ts or similar
import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's id */
      id: number;
    } & DefaultSession["user"];
  }

  /**
   * Returned by the `jwt` callback
   */
  interface JWT extends DefaultJWT {
    /** The user's additional custom field */
    id: number;
  }
}