import { Bell, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AppNavbar() {
  return (
    <div className="w-full flex items-center gap-[10px] justify-end px-6 border-b-1 py-3 sticky top-0 bg-white z-999">
      <div className="flex gap-[15px] px-6 border-r-1" href="/">
        <Bell width={20}/>
        <ShoppingCart width={20}/>
      </div>
      <div className="flex gap-[10px]">
        <div>
          <Image
            src={"/pfp.jpeg"}
            width={0}
            height={0}
            className="w-10 h-10 rounded-full"
            alt="pfp"
          />
        </div>
        <div>
          <p className="font-[600]">Admin User</p>
          <p className="tracking-wide text-gray-400 text-[12px]">KSHRD</p>
        </div>
      </div>
    </div>
  );
}
