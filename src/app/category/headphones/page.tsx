import MarkTwoHeadphone from "@/components/MarkTwoHeadphone";
import ProductTitle from "@/components/ProductTitle";


export default function HeadphonesCategory() {
  return (
    <main className="">
      <ProductTitle title="Headphones" />
      <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem]">
        <MarkTwoHeadphone />
      </section>
    </main>
  );
}