import BestGear from "@/components/BestGear";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="">
          {children}
          <BestGear />
        </div>
      </body>
    </html>
  );
}
