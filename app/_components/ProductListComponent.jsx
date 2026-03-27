"use client";
import React, { useEffect, useState } from "react";
import SearchProductComponent from "./SearchProductComponent";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductListComponent() {
  const [data, setData] = useState();
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch(`https://homework-api.noevchanmakara.site/api/v1/products`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const searchByName =
    input === ""
      ? data?.payload
      : data?.payload.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase()),
        );
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div>
          <p className="text-[24px] font-[700]">List of All Products</p>
        </div>
        <SearchProductComponent setInput={setInput} />
      </div>
      <div className="w-full grid grid-cols-4 relative gap-[20px] mt-[20px]">
        {searchByName?.map((item) => (
          <div
            className="rounded-[15px] border-1 overflow-hidden"
            key={item.productId}
          >
            <div className="overflow-hidden">
              <Image
                src={"https://i.imgur.com/KekIAqq.png"}
                width={0}
                height={0}
                className="w-full rounded-t-[15px] hover:scale-125 transition duration-300"
                alt="Product Image"
                priority
                unoptimized
              />
            </div>
            <div className="w-full p-6 flex flex-col justify-between">
              <div className="flex h-[200px] flex-col gap-[20px] justify-between">
                <div className="flex items-center justify-between">
                  <p className="text-blue-800 font-bold text-[10px]">
                    FLAGSHIP SERIES
                  </p>
                  <p className="text-[20px] font-[800]">${item.price}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{item.name}</p>
                  <div className="">
                    <p className="text-gray-400 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <Link href={`/products/${item.productId}`}>
                  <Button className={"w-full p-5 text-md font-bold"}>
                    View Products <MoveUpRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
