import BestGear from "@/components/BestGear";
import CategoryItems from "@/components/CategoryItems";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[90rem] box-border m-0 p-0 antialiased" suppressHydrationWarning>
        <Header color="black" />
        <div className="">
          {children}
          <CategoryItems />
          <BestGear />
        </div>
        <Footer />
      </body>
    </html>
  );
}
