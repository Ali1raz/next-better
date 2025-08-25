"use client";

import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/use-signout";

export function LogoutButton() {
  const handleSignOut = useSignOut();

  return (
    <Button onClick={handleSignOut} variant="destructive" className="w-full">
      Logout
    </Button>
  );
}
