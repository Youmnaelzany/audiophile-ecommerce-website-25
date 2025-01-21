"use client";

import { useState } from "react";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { useForm, FormProvider } from "react-hook-form"; // Import useForm and FormProvider
import { Input } from "./ui/input";
import Image from 'next/image';
import CashImage from '../../public/assets/checkout/icon-cash-on-delivery.svg';

type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  eMoneyNumber: string;
  eMoneyPin: string;
};

export default function Checkout() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const methods = useForm<FormData>(); // Add the type here
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (data: FormData) => {
    // Handle form submission logic here
    console.log("Form submitted:", data);
  };

  const totalPrice = cart.reduce((total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0);
  const shippingCost = 50; // Example shipping cost
  const vat = totalPrice * 0.15; // Example VAT calculation
  const grandTotal = totalPrice + shippingCost + vat;

  return (
    <FormProvider {...methods}> {/* Wrap the form with FormProvider */}
        <form onSubmit={methods.handleSubmit(handleSubmit)} className="flex flex-col gap-8 lg:flex-row lg:justify-between">
        <div className="bg-white px-6 pt-6 pb-8">
          <h2 className="text-2xl font-bold">Checkout</h2>
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="text-[0.8125rem] text-orange uppercase font-bold tracking-[0.05806rem] leading-[1.5625rem]">Billing details</h2>
          <FormItem>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormControl>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <FormControl>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
        <div className="flex flex-col gap-6 mt-8">
        <h2 className="text-[0.8125rem] text-orange uppercase font-bold tracking-[0.05806rem] leading-[1.5625rem]">shipping info</h2>
          <FormItem>
            <FormLabel htmlFor="address">Address</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="zip">Zip Code</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="city">City</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel htmlFor="country">Country</FormLabel>
            <FormControl>
              <Input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="input"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="text-[0.8125rem] text-orange uppercase font-bold tracking-[0.05806rem] leading-[1.5625rem]">payment details</h2>
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex h-14 w-[17.5rem] md:w-[19.3125rem] rounded-lg border border-gray active:border-orange bg-white px-3 py-1 text-sm placeholder:text-black/40 font-bold leading-normal tracking-[-0.01563rem] text-black shadow-md transition-colors hover:border-orange outline-none items-center text-center gap-4 mb-4 mt-4">
                <RadioGroupItem value="e-money" id="e-money" />
                <FormLabel htmlFor="e-money">E-Money</FormLabel>
              </div>
              <div className="flex h-14 w-[17.5rem] md:w-[19.3125rem] rounded-lg border border-gray active:border-orange bg-white px-3 py-1 text-sm placeholder:text-black/40 font-bold leading-normal tracking-[-0.01563rem] text-black shadow-md transition-colors hover:border-orange outline-none items-center text-center gap-4">
                <RadioGroupItem value="cash" id="cash" />
                <FormLabel htmlFor="cash">Cash on Delivery</FormLabel>
              </div>
            </RadioGroup>
          </FormItem>
          {paymentMethod === "e-money" && (
            <>
              <FormItem>
                <FormLabel htmlFor="eMoneyNumber">E-Money Number</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
              <FormItem>
                <FormLabel htmlFor="eMoneyPin">E-Money PIN</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="eMoneyPin"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleChange}
                    required
                    className="input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
          {paymentMethod === "cash" && (
            <div className="flex flex-col gap-8">
              <Image
      src={CashImage}
      alt="Cash on Delivery"
      width={48} 
      height={48} 
    />
              <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-black/50">
                The &apos;Cash on Delivery&apos; option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
              </p>
            </div>
          )}

           </div>
        </div>


{/* Order Summary */}
      <div className="bg-white px-6 pt-6 pb-8">
        <h3 className="text-lg font-bold mt-6">Order Summary</h3>
        <ul>
          {cart.map((item: { id: number; name: string; price: number; quantity: number }) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping Cost:</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT (included):</span>
          <span>${vat.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Grand Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
         <Button type="submit" className="mt-6">Continue</Button>
      </div>
      </form>
    </FormProvider>
  );
}
