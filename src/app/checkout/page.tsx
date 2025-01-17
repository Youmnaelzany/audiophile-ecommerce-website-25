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
      <main>
        <Checkout/>
      </main>
      <Footer />
    </>
  )
}