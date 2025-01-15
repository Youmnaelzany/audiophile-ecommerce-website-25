import ProductTitle from "@/components/ProductTitle";
import SpeakersCategory from "@/components/SpeakersCategory";

export const metadata = {
  title: "Speakers | Audiophile",
};


export default function SpeakersHomePage() {
  return (
    <main className="">
      <ProductTitle title="Speakers" />
      <section className="">
        <SpeakersCategory />
      </section>
    </main>
  );
}