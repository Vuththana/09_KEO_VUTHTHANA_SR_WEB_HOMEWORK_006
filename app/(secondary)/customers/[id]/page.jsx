import { fullName } from "@/app/_utils/fullname";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/customers/${id}`,
  );
  const data = await res.json();
  const customer = data.payload;
  console.log(customer);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[760px] h-[300px] mx-auto flex items-center border-1 rounded-[15px]">
        <div className="w-[400px] rounded-tl-[15px] rounded-bl-[15px] flex flex-col gap-[20px] h-full items-center justify-center bg-slate-100 p-10">
          <Image
            src={"/pfp.jpeg"}
            width={100}
            height={100}
            alt="Profile Picture"
            className="border-1 rounded-full"
          />
          <p className="text-[18px] font-[800]">
            {fullName(customer.firstName, customer.lastName)}
          </p>
        </div>
        <div className="p-4 flex flex-col gap-[20px]">
          <div>
            <Link
              href={"/customers"}
              className="inline-flex gap-[5px] text-gray-500 font-[800] items-center text-[12px]"
            >
              <ArrowLeft width={18} /> BACK TO CUSTOMER TABLE
            </Link>
          </div>
          <div className="w-[500px] grid grid-cols-2 gap-[20px]">
            <div>
              <p className="text-[10px] text-gray-500 font-[800] tracking-wider">
                FULL NAME
              </p>
              <div className="flex gap-[10px] items-center">
                <User width={18} className="text-yellow-500" />
                <p className="font-[600]">
                  {fullName(customer.firstName, customer.lastName)}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-[800] tracking-wider">
                TOTAL SPENT
              </p>
              <div className="flex gap-[10px] items-center">
                <div className="p-1 rounded-[15px] text-green-500 bg-green-100">
                  <Wallet width={18} />
                </div>
                <p className="font-[1000] text-[24px]">
                  ${customer.moneySpent}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-gray-500 font-[800] tracking-wider">
                BIRTH DATE
              </p>
              <div className="flex gap-[10px] items-center">
                <Calendar width={18} className="text-yellow-500" />
                <p className="font-[600]">{customer.birthDate}</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 font-[800] tracking-wider">
                ACCOUNT ID
              </p>
              <div className="p-4 rounded-[15px] bg-gray-100">
                <p className="text-[12px] text-gray-600">
                  {customer.customerId}
                </p>
              </div>
            </div>

            <Button className={"font-[800] p-5"}>Edit this profile</Button>

            <Button className={"bg-red-100 text-gray-500 font-[800] p-5 border-red-300"}>Delete This User</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
