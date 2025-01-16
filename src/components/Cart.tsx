"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import CountBtn from "./CountBtn";

export default function Cart() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce((total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0);

  return (
    <Dialog>
      <DialogTrigger>
        <ShoppingCart className="text-white" size={30} />
      </DialogTrigger>
      <DialogContent className="w-[20.4375rem] p-8 sm:w-[23.5625rem] space-y-8">
        <div className="flex items-center justify-between">
          <DialogTitle>
            <h3 className="text-lg text-black font-bold leading-normal uppercase tracking-[0.08038rem]">
              Cart ({cart.length})
            </h3>
          </DialogTitle>
          <button type="button" onClick={clearCart} className="text-[0.9375rem] text-black/50 underline font-normal leading-[1.5625rem]">Remove all</button>
        </div>
        <div className="space-y-6">
          {cart.map((item: { id: string; image: string; name: string; price: number; quantity: number }) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} className="w-[2.26188rem] h-10 object-cover rounded-lg" />
                <div className="">
                  <h3 className="text-[0.9375rem] text-black font-bold leading-[1.5625rem]">{item.name}</h3>
                  <h4 className="text-sm text-black/50 font-bold leading-[1.5625rem]">${item.price}</h4>
                </div>
              </div>
              <CountBtn item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-[0.9375rem] text-black/50 font-normal leading-[1.5625rem] uppercase">Total</h3>
          <h3 className="text-lg text-black font-bold leading-normal uppercase">${totalPrice.toFixed(2)}</h3>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/checkout" className="w-[16.9375rem] h-12 bg-orange hover:bg-light-orange text-[0.8125rem] text-white uppercase font-bold tracking-[0.0625rem]  sm:w-[19.5625rem] flex items-center justify-center">Checkout</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
