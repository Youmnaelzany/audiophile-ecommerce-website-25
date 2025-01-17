// File: B:\Built Projects\audiophile-ecommerce-website\src\components\Checkout.tsx
"use client";

import { useState } from "react";
import {  FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { useForm, FormProvider } from "react-hook-form"; // Import useForm and FormProvider


export default function Checkout() {
  const { cart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const methods = useForm(); // Initialize the form methods
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

  const handleSubmit = (data: typeof formData) => {
    // Handle form submission logic here
    console.log("Form submitted:", data);
  };

  const totalPrice = cart.reduce((total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0);
  const shippingCost = 50; // Example shipping cost
  const vat = totalPrice * 0.15; // Example VAT calculation
  const grandTotal = totalPrice + shippingCost + vat;

  return (
    <FormProvider {...methods}> {/* Wrap the form with FormProvider */}
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <h2 className="text-2xl font-bold">Checkout</h2>
      <FormItem>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormControl>
          <input
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
          <input
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
          <input
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

      <FormItem>
        <FormLabel htmlFor="address">Address</FormLabel>
        <FormControl>
          <input
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
          <input
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
          <input
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
          <input
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

      <FormItem>
        <FormLabel>Payment Method</FormLabel>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <RadioGroupItem value="e-money" id="e-money" />
          <FormLabel htmlFor="e-money">E-Money</FormLabel>
          <RadioGroupItem value="cash" id="cash" />
          <FormLabel htmlFor="cash">Cash on Delivery</FormLabel>
        </RadioGroup>
      </FormItem>

      {paymentMethod === "e-money" && (
        <>
          <FormItem>
            <FormLabel htmlFor="eMoneyNumber">E-Money Number</FormLabel>
            <FormControl>
              <input
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
              <input
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
        <p className="text-sm text-gray-600">
          The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
        </p>
      )}

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
      </form>
    </FormProvider>
  );
}
