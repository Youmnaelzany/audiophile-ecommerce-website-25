import EarphonesCategory from "@/components/EarphonesCategory";
import ProductTitle from "@/components/ProductTitle";

export default function EarphonesHomePage() {
  return (
    <main className="">
      <ProductTitle title="Earphones" />
      <section className="">
        <EarphonesCategory />
      </section>
    </main>
  );
}