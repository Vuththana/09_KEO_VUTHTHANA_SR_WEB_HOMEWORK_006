import { Button } from "@/components/ui/button";
import { House, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="p-10 h-full">
      <div className="text-center w-[660px] mx-auto h-full flex flex-col justify-center gap-[20px]">
        <div className="flex justify-center items-center">
          <p className="text-slate-300 font-[1000] absolute z-1 text-[100px]">
            404
          </p>
          <p className="text-[24px] relative z-999 font-[1000]">
            Oops! Page not found.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-[18px] text-gray-400 font-[500]">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Don't worry, our products
            are still here!
          </p>
        </div>
        <div className="flex gap-[20px] justify-center">
          <Link href={"/"}>
            <Button
              className={
                "bg-blue-600 shadow-blue-300 shadow-md h-[40px] font-[800]"
              }
            >
              <House /> Back to Homepage
            </Button>
          </Link>

          <Link href={"/products"}>
            <Button
              className={
                "bg-white shadow-md border-1 border-black h-[40px] font-[800] text-black"
              }
            >
              <Search /> Browse Products
            </Button>
          </Link>
        </div>
        <div>
          <p className="text-[14px] font-[400] text-gray-600">Need Help? <span className="text-blue-600">Contact Support</span></p>
        </div>
      </div>
    </div>
  );
}
