import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

declare module "next-auth" {
    interface Session {
      user: {
        image: string | undefined;
        name?: string | null;
        email?: string | null;
        role?: "admin" | "user";
      };
    }
  }
  
export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        Credentials({
            credentials: {
                email: {
                    label: "email", type: "email", required: true
                },
                password: {
                    label: "password", type: "password", required: true
                }
            },
            async authorize(credentials) {
                const mockUser = {
                    id: "1",
                    name: "Test User",
                    email: "test@example.com",
                    password: "123456",
                    role: "admin"
                  };
                if (
                    credentials?.email === mockUser.email &&
                    credentials?.password === mockUser.password
                ) {
                    const { password, ...userWithoutPassword } = mockUser;
                    return userWithoutPassword;
                }
                return null
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
          // add role in the session
          if (token.email === "test@example.com") {
            session.user.role = "admin";
          } else {
            session.user.role = "user";
          }
          return session;
        },
        async jwt({ token, user }) {
          // if have a user — add email to token
          if (user) {
            token.email = user.email;
          }
          return token;
        }
    }
}