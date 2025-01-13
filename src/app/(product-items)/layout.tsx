import BestGear from "@/components/BestGear";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem]">
          {children}
          <BestGear />
        </div>
      </body>
    </html>
  );
}
