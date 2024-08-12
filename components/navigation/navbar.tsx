import { auth } from "@/lib/auth";
import { User } from "@prisma/client";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user as User;

  return (
    <div className="w-full py-4 border-separate border-b">
      <DesktopNavbar />
      <MobileNavbar user={user} />
    </div>
  );
};
export default Navbar;
