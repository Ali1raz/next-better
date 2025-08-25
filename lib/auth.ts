import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { emailOTP } from "better-auth/plugins";
import { resend } from "./send";
import { env } from "./env";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        await resend.emails.send({
          from: "next <onboarding@resend.dev>",
          to: [email],
          subject: "Verifiy your email",
          html: `<p>Your verification code is: <strong>${otp}</strong></p>`,
        });
      },
    }),
  ],
});
