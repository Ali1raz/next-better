import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      {session ? (
        <div>Logged in {session.user.email}</div>
      ) : (
        <div>
          <Link href="/login" className={buttonVariants()}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
