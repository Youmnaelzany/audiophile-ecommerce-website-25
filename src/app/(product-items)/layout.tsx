import BestGear from "@/components/BestGear";
import Header from "@/components/Header";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header color="black" />
        <div className="">
          {children}
          <BestGear />
        </div>
      </body>
    </html>
  );
}
