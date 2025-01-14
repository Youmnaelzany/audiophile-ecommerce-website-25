import BestGear from "@/components/BestGear";
import CategoryItems from "@/components/CategoryItems";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header color="lightBlack" />
      <main className="">
        <CategoryItems />
        <BestGear />
      </main>
    </>
  );
}
