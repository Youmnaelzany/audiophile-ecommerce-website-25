import Link from "next/link";
import { Button } from "./ui/button";

async function getProduct() {
  const res = await fetch('http://localhost:4000/3')
  return res.json()
}
export default async function MarkTwoHeadphone() {
  const products = await getProduct()
  return (
    <div className="">
      <span>NEW PRODUCT</span>
      <h1 className="">
        {products.name}
      </h1>
      <p className="">
        {products.description}
      </p>
      <Button asChild><Link href="/products/xx99-mark-two-headphone">see product</Link></Button>
    </div>
  );
}