import CategoryItems from "@/components/CategoryItems";
import EarphonesCategory from "@/components/EarphonesCategory";
import ProductTitle from "@/components/ProductTitle";

export const metadata = {
  title: "Earphones | Audiophile",
};


export default function EarphonesHomePage() {
  return (
    <main className="">
      <ProductTitle title="Earphones" />
      <section className="">
        <EarphonesCategory />
        <CategoryItems />
      </section>
    </main>
  );
}