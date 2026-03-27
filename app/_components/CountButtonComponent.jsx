"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function CountButtonComponent() {
    const [count, setCount] = useState(1);
  return (
    <div className="flex items-center justify-center gap-[20px] p-2 rounded-[15px] bg-slate-100 w-[120px]">
      <Button
        className={"bg-transparent text-black text-[20px] cursor-pointer"}
        onClick={() => setCount(prev => prev != 0 ? prev - 1 : 0)}
      >
        -
      </Button>
      <p>{count}</p>
      <Button
        className={"bg-transparent text-black text-[20px] cursor-pointer"}
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </Button>
    </div>
  );
}
