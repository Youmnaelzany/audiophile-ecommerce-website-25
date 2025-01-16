"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { toast } from "../hooks/use-toast"; // Import the toast function

interface Product {
  id: number;
  name: string;
  price: number;
  // Add other product properties here
}

export default function AddToCartBtn({ product }: { product: Product }) {
  const [count, setCount] = useState(1);
  const { addItem } = useCart();

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 1);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: count });
    toast({ title: `${product.name} added to cart!`, description: `Quantity: ${count}` }); // Show toast notification
  };

  return (
    <div className="flex items-center gap-x-4">
      <div className="w-[7.5rem] h-12 bg-light-grey flex items-center justify-center text-center gap-x-5">
        <button onClick={decrementCount} className="text-[0.8125rem] text-black/25 font-bold uppercase leading-normal tracking-[0.0625rem] hover:text-orange transition-colors duration-300 ease-in-out">-</button>
        <button className="text-[0.8125rem] text-black font-bold uppercase leading-normal tracking-[0.0625rem]">{count}</button>
        <button onClick={incrementCount} className="text-[0.8125rem] text-black/25 font-bold uppercase leading-normal tracking-[0.0625rem] hover:text-orange transition-colors duration-300 ease-in-out">+</button>
      </div>
      <Button type="button" onClick={handleAddToCart}>
        Add To Cart
      </Button>
    </div>
  );
}
