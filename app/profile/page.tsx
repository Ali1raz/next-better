import { Badge, CalendarDays, Mail, User } from "lucide-react";
import { LogoutButton } from "./_components/logout-button";
import { RequireSession } from "@/data/require-session";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Profile() {
  const session = await RequireSession();

  const { user } = session;

  return (
    <div className="flex min-h-svh items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user.image || undefined}
                alt={user.name || "User"}
              />
              <AvatarFallback className="text-2xl">
                {user.name ? (
                  user.name.charAt(0).toUpperCase()
                ) : (
                  <User className="size-8" />
                )}
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-2xl font-bold">{user.name || "User"}</h1>
          <div className="flex justify-center mt-2">
            <Badge>{user.emailVerified ? "Verified" : "Unverified"}</Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{user.email}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="pt-4">
            <LogoutButton />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
