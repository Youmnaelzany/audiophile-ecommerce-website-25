import HeadphonesCategory from "@/components/HeadphonesCategory";
import ProductTitle from "@/components/ProductTitle";

export const metadata = {
  title: "Headphones | Audiophile",
};

export default function HeadphonesHomePage() {
  return (
    <main className="">
      <ProductTitle title="Headphones" />
      <HeadphonesCategory />
    </main>
  );
}