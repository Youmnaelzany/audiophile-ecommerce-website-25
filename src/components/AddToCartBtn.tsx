"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function AddToCartBtn() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1)
  }
  const decrementCount = () => {
    setCount(count - 1)
  }
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[7.5rem] h-12 bg-light-grey flex items-center justify-center text-center gap-x-5">
        <button onClick={decrementCount} className="text-[0.8125rem] text-black/25 font-bold uppercase leading-normal tracking-[0.0625rem] hover:text-orange transition-colors duration-300 ease-in-out">-</button>
        <button className="text-[0.8125rem] text-black font-bold uppercase leading-normal tracking-[0.0625rem]">{count}</button>
        <button onClick={incrementCount} className="text-[0.8125rem] text-black/25 font-bold uppercase leading-normal tracking-[0.0625rem] hover:text-orange transition-colors duration-300 ease-in-out">+</button>
      </div>
      <Button type="submit">Add To Cart</Button>
    </div>
  );
}