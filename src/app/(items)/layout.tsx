import BestGear from "@/components/BestGear";
import CategoryItems from "@/components/CategoryItems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/toaster"

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[90rem] box-border m-0 p-0 antialiased" suppressHydrationWarning>
        <CartProvider>
        <Header color="black" />
        <div className="">
          <Toaster /> {/* Render the Toaster here */}
          {children}
          <CategoryItems />
          <BestGear />
          </div>
          <Footer />
          </CartProvider>
      </body>
    </html>
  );
}
