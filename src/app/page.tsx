import BestGear from "@/components/BestGear";
import CategoryItems from "@/components/CategoryItems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
