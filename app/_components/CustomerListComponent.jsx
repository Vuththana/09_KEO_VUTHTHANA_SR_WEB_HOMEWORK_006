"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Eye } from "lucide-react";
import Link from "next/link";
import SearchCustomerComponent from "./SearchCustomerComponent";
import { fullName } from "../_utils/fullname";
export default function CustomerListComponent() {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(`https://homework-api.noevchanmakara.site/api/v1/customers`)
    .then(res => res.json())
    .then(data => setData(data))
  },[])
  const searchByName = input === "" ? data?.payload : data?.payload.filter((item) => fullName(item.firstName, item.lastName).toLowerCase().includes(input.toLowerCase()))
  return (
    <>
      <div className="flex justify-between">
        <div>
          <p className="text-[24px] font-[700]">List of All Customer</p>
        </div>
        <SearchCustomerComponent setInput={setInput}/>
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
          {searchByName?.map((customers) => (
            <tr className="h-[80px]" key={customers.customerId}>
              <td className="px-10">
                <p>
                  {customers.firstName} {customers.lastName}
                </p>
                <div className="w-[100px]">
                  <p className="text-[10px] text-gray-400 truncate">
                    ID: {customers.customerId}
                  </p>
                </div>
              </td>
              <td className="font-light text-gray-400 text-[14px]">
                <p className="flex customerss-center justify-center gap-[10px]">
                  <Calendar width={15} />
                  {customers.birthDate}
                </p>
              </td>
              <td className="text-center text-[18px] text-green-800 text-shadow-lg">
                <p className="bg-green-100 inline-block px-4 py-1 rounded-[15px] mx-auto">
                  ${customers.moneySpent}
                </p>
              </td>
              <td className="text-center">
                <Link href={`/customers/${customers.customerId}`}>
                  <Button
                    className={
                      "bg-white text-black shadow-md hover:cursor-pointer font-light"
                    }
                  >
                    <Eye /> View Profile
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
