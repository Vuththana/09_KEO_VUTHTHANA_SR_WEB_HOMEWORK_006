"use client";
import { Search } from "lucide-react";
import React from "react";

export default function SearchCustomerComponent() {
  return (
    <div className="flex items-center border-1 rounded-[15px] px-4">
      <Search width={15} className="text-gray-400"/>
      <input
        type="text"
        className="px-4 py-2 border-0 focus:outline-hidden"
        placeholder="Search Products..."
      />
    </div>
  );
}
