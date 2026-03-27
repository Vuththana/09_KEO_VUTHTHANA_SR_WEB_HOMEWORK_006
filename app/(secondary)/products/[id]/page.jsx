import ButtonCount from "@/app/_components/CountButtonComponent";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/products/${id}`,
  );
  const data = await res.json();
  const item = data.payload;
  console.log(item);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-[1000px] flex rounded-[15px] border-1">
        <div className="flex gap-[80px] flex-col w-[800px] p-10 border-r-1 rounded-tl-[15px] rounded-bl-[15px] bg-slate-100">
          <div className=" flex justify-between">
            <div className="flex flex-col gap-[10px] font-[600]">
              <div className="w-[120px] h-[20px] flex items-center justify-center text-[12px] rounded-[20px] p-2 bg-black text-white">
                <p>NEW ARRIVAL</p>
              </div>
              <div className="w-[120px] h-[20px] flex items-center justify-center text-[12px] rounded-[15px] p-2 bg-blue-200 text-blue-400">
                <p>FREE SHIPPING</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="rounded-full border-1 p-1 bg-white">
                <Heart width={20} height={20} />
              </div>
              <div className="rounded-full border-1 p-1 bg-white">
                <Share2 width={20} height={20} />
              </div>
            </div>
          </div>

          <Image
            src={
              "https://imgs.search.brave.com/_P6GXG2X_njm2cx-4mqkl5hrEMNovX1w-_CloC2GcCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pd2F0/Y2h1c2EuY29tL2Nk/bi9zaG9wL2ZpbGVz/L1Bob3RvMjAyNC0x/MC0yMV8xMjM2MjZf/MS5qcGc_dj0xNzMw/NzUzMTE0JndpZHRo/PTUzMw"
            }
            width={0}
            height={0}
            alt="Product Image"
            className="w-[300px] h-[300px] mx-auto"
            unoptimized
          />
        </div>
        <div className="p-10">
          <div className="flex flex-col gap-[30px]" key={item.productId}>
            <div>
              <Link
                href={"/products"}
                className="inline-flex gap-[5px] text-gray-500 font-[800] items-center text-[12px]"
              >
                <ArrowLeft width={18} /> BACK TO PRODUCTS
              </Link>
            </div>
            <div>
              <p className="text-blue-400 tracking-[4px] text-[14px] font-[600]">
                PREMIUM EXPERIENCE
              </p>
              <p className="text-[42px] leading-[38px] font-[1000]">
                {item.name}
              </p>
            </div>

            <div className="flex items-center gap-[10px]">
              <p className="text-[24px] font-[800]">
                ${item.price - item.price * 0.2}
              </p>
              <div className="">
                <p className="text-[12px] text-gray-500 font-[800] line-through">
                  ${item.price}
                </p>
                <p className="text-[12px] text-green-800 font-[800]">
                  SAVE 20% TODAY
                </p>
              </div>
            </div>
            <div className="w-[360px] px-3 border-blue-400 border-l-2">
              <p>{item.description}</p>
            </div>
            <p className="text-[12px] font-[800] text-gray-500">
              SELECT QUANTITY
            </p>
            <ButtonCount />
            <div className="flex gap-[20px]">
              <Button className={"font-[800] px-4 py-5"}>
                <ShoppingCart width={18} /> Add to Cart
              </Button>

              <Button className={"font-[800] border-black border-1 px-4 py-5 bg-white text-gray-600"}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
