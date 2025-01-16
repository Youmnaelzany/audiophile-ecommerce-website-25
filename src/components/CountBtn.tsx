"use client";
import { useState } from "react";

interface Item {
  id: string;
  quantity: number;
}

type UpdateQuantity = (id: string, quantity: number) => void;
type RemoveItem = (id: string) => void;

export default function CountBtn({ item, updateQuantity, removeItem } : { item: Item, updateQuantity: UpdateQuantity, removeItem: RemoveItem }) {
  const [count, setCount] = useState(item.quantity);

  const incrementCount = () => {
    setCount(count + 1);
    updateQuantity(item.id, count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      updateQuantity(item.id, count - 1);
    } else {
      removeItem(item.id);
    }
  };

  return (
    <div className="w-[7.5rem] h-12 bg-light-grey flex items-center justify-center text-center gap-x-5">
      <button onClick={decrementCount} className="text-[0.8125rem] text-black/25 font-bold uppercase leading-normal tracking-[0.0625rem] hover:text-orange transition-colors duration-300 ease-in-out">-</button>
      <button className="text-[0.8125rem] text-black font-bold uppercase leading-normal tracking-[0.0625rem]">{count}</button>
      <button onClick={incrementCount} className="text-[0.8125rem] text-black/25 font-bold uppercase leading-normal tracking-[0.0625rem] hover:text-orange transition-colors duration-300 ease-in-out">+</button>
    </div>
  );
}
