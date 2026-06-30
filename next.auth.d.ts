import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      email: string; // Ensure email is explicit if needed, though DefaultSession has it
      name?: string;
      accessToken: string;
    } & DefaultSession["user"];
    accessToken: string;
  }

  interface User {
    id: string;
    email: string;
    role: string;
    name?: string;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    email: string;
    name?: string;
    accessToken: string;
  }
}