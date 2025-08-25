import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <div className="max-w-sm w-full mx-auto flex flex-col gap-5 ">
        {session ? (
          <div>
            Logged in{" "}
            <Link
              href="/profile"
              className="hover:decoration-blue-500 hover:text-blue-500 transition-colors duration-100 underline underline-offset-2"
            >
              {session.user.email}
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/login" className={buttonVariants()}>
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
