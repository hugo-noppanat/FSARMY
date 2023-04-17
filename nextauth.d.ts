// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";

// common interface for JWT and Session
interface IUser extends DefaultUser {
  role?: string;
}
declare module "next-auth" {
  interface User extends IUser {
    // add custom properties to User
    role?: string;
    accessToken?: string;
    dept?: string;
  }
  interface Session {
    role?: string;
    accessToken?: string;
    depr?: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT extends IUser {}
}
