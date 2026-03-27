import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, CreditCard, Settings, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AppNavbar() {
  return (
    <div className="w-full flex items-center gap-[10px] justify-end px-6 border-b-1 py-3 sticky top-0 bg-white z-999">
      <div className="flex gap-[15px] px-6 border-r-1" href="/">
        <div className="relative">
          <Bell width={20} />
          <div className="w-[10px] h-[10px] absolute inset-0 top-0 left-2 bg-blue-400 rounded-full shadow-blue-300 shadow-md"></div>
        </div>

        <div className="relative">
          <ShoppingCart width={20} />
          <div className="w-[18px] h-[18px] absolute -top-2 left-2 flex items-center justify-center bg-blue-400 rounded-full shadow-blue-300 shadow-md text-white text-[12px]">
            3
          </div>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-[20px] px-3">
            <div>
              <Image
                src={"/pfp.jpeg"}
                width={0}
                height={0}
                className="w-10 h-10 rounded-full"
                alt="pfp"
                unoptimized
              />
            </div>
            <div>
              <p className="font-[600]">Admin User</p>
              <p className="tracking-wide text-gray-400 text-[12px]">KSHRD</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup className="p-3">
            <DropdownMenuLabel>Admin User</DropdownMenuLabel>
            <DropdownMenuLabel>admin@hrdshop.com</DropdownMenuLabel>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User /> My Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard /> Billing
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
