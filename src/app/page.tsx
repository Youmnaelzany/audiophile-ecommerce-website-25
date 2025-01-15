import BestGear from "@/components/BestGear";
import CategoryItems from "@/components/CategoryItems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Home | Audiophile",
};

export default function Home() {
  return (
    <>
      <Header color="lightBlack" />
      <main className="">
        <CategoryItems />
        <BestGear />
      </main>
      <Footer />
    </>
  );
}
