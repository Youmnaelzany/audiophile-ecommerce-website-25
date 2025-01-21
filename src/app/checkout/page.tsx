import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Checkout | Audiophile",
};

export default function CheckoutHomePage() {
  return (
    <>
      <Header color="black" />
      <main className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem]">
        <Checkout/>
      </main>
      <Footer />
    </>
  )
}