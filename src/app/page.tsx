import BestGear from "@/components/BestGear";
import CategoryItems from "@/components/CategoryItems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
export const metadata = {
  title: "Home | Audiophile",
};

export default function Home() {
  return (
    <>
      <Header color="lightBlack" />
      <main className="">
        {/* Hero Section */}
        <section className="bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desk flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-center bg-cover bg-no-repeat mb-[7.5rem] bg-bottom">
          <Separator/>
          <div className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] py-28 sm:pt-32 sm:pb-40 text-center lg:text-left flex flex-col items-center justify-center lg:items-start">
          <span className="text-sm text-white opacity-[0.4964] font-normal leading-normal uppercase tracking-[0.625rem]">New Product</span>
          <h1 className="mt-4 sm:mt-6 mb-6 text-white font-bold leading-10 tracking-[0.08038rem] uppercase w-[20.5rem] text-[2.25rem] sm:text-[3.5rem] sm:leading-[3.625rem] sm:tracking-[0.125rem] sm:w-[24.75rem]">
            XX99 Mark II HeadphoneS
          </h1>
          <p className="mb-7 sm:10 w-[20.5rem] sm:w-[21.8125rem] text-[0.9375rem] font-normal leading-[1.5625rem] text-white/75">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Button asChild>
              <Link href="/products/xx99-mark-two-headphones">
              See Product
            </Link>
          </Button>
          </div>
        </section>
        <CategoryItems />
        <BestGear />
      </main>
      <Footer />
    </>
  );
}
