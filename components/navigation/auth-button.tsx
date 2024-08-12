import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { auth } from "@/lib/auth";
import AuthButtonMenu from "./auth-button-menu";

const AuthButton = async () => {
  const session = await auth();
  const user = session?.user as User;

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <AuthButtonMenu user={user} />
        </>
      ) : (
        <div className="flex items-center gap-1">
          <Button asChild variant="outline">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/auth/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
