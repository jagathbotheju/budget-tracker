"use client";
import React, { useState } from "react";
import { User } from "@prisma/client";
import { logout } from "@/actions/authActions";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Props {
  user: User;
}

const AuthButtonMenu = ({ user }: Props) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <DropdownMenu open={openMenu} onOpenChange={() => setOpenMenu(false)}>
      <DropdownMenuTrigger
        className="focus:outline-none"
        onMouseEnter={() => setOpenMenu(true)}
        // onMouseLeave={() => setOpenMenu(false)}
      >
        <Avatar className="cursor-pointer">
          <AvatarImage src={user.image ? user.image : "/images/no-image.svg"} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 dark:bg-slate-700">
        <DropdownMenuItem asChild>
          <span className="line-clamp-1 w-full text-center font-semibold">
            Welcome, {user.name}
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        {/* profile */}
        <DropdownMenuItem asChild>
          <span className="w-full cursor-pointer">Profile</span>
        </DropdownMenuItem>

        {/* logout */}
        <DropdownMenuItem asChild>
          <span
            className="w-full cursor-pointer"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AuthButtonMenu;
