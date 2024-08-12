import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";
import { LoginSchema } from "./schema";

export default {
  providers: [
    Credentials({
      name: "credentials",
      async authorize(credentials) {
        const validated = LoginSchema.safeParse(credentials);
        if (validated.success) {
          const { email, password } = validated.data;
          const user = await prisma.user.findUnique({
            where: { email },
          });
          if (!user || !(await compare(password, user.passwordHash))) null;

          return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
