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

const productsImage: { [key: number]: string } = {
  1: "/assets/cart/image-yx1-earphones.jpg",
  2: "/assets/cart/image-xx59-headphones.jpg",
  3: "/assets/cart/image-xx99-mark-one-headphones.jpg",
  4: "/assets/cart/image-xx99-mark-two-headphones.jpg",
  5: "/assets/cart/image-zx7-speaker.jpg",
  6: "/assets/cart/image-zx9-speaker.jpg",
};

export default function Cart() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce((total: number, item: { id: string; price: number; quantity: number }) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total: number, item: { quantity: number; }) => total + item.quantity, 0); // Calculate total items

  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative">
          <ShoppingCart className="text-white" size={30} />
          {totalItems > 0 && (
            <span className="absolute top-0 -right-8 text-orange rounded-full text-2xl font-bold px-1 size-8">
              {totalItems}
            </span>
          )}
        </div>
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
          {cart.map((item: { id: string; name: string; price: number; quantity: number }) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={productsImage[Number(item.id)]}
                  alt={item.name}
                  className="w-[2.26188rem] h-10 object-cover rounded-lg"
                  width={80}
                  height={80}
                />
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
          <Link href="/checkout" className="w-[16.9375rem] h-12 bg-orange hover:bg-light-orange text-[0.8125rem] text-white uppercase font-bold tracking-[0.0625rem] sm:w-[19.5625rem] flex items-center justify-center">Checkout</Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}








