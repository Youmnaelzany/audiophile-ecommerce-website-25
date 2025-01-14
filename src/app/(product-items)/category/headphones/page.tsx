import CategoryItems from "@/components/CategoryItems";
import HeadphonesCategory from "@/components/HeadphonesCategory";
import ProductTitle from "@/components/ProductTitle";

export default function HeadphonesHomePage() {

  return (
    <main className="">
      <ProductTitle title="Headphones" />
      <HeadphonesCategory />
      <CategoryItems />
    </main>
  );
}