import React from "react";
import SearchCustomerComponent from "../_components/SearchCustomerComponent";
import { Button } from "@/components/ui/button";
import { Calendar, Eye } from "lucide-react";

export default function page() {
  return (
    <div className="p-4 w-full h-full">
      <div className="flex justify-between">
        <div>
          <p className="text-[24px] font-[700]">List of All Customer</p>
        </div>
        <SearchCustomerComponent />
      </div>

      <table className="w-full shadow-md rounded-[15px] table-fixed mt-[20px] font-[700] ">
        <thead>
          <tr className="border-b h-[50px]">
            <td className="px-10">Customer Name</td>
            <td className="text-center">Birthdate</td>
            <td className="text-center">Amount Spend</td>
            <td className="text-center">Action</td>
          </tr>
        </thead>

        <tbody>
          <tr className="h-[80px]">
            <td className="px-10">
              <p>Kok Dara</p>
              <p className="text-[10px] text-gray-400">ID: 573352...</p>
            </td>
            <td className="font-light text-gray-400 text-[14px]">
              <p className="flex items-center justify-center gap-[10px]">
                <Calendar width={15} />
                2000-03-01
              </p>
            </td>
            <td className="text-center text-[18px] text-green-800 text-shadow-lg">
              <p className="bg-green-100 inline-block px-4 py-1 rounded-[15px] mx-auto">
                $27
              </p>
            </td>
            <td className="text-center">
              <Button
                className={
                  "bg-white text-black shadow-md hover:cursor-pointer font-light"
                }
              >
                <Eye /> View Profile
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
