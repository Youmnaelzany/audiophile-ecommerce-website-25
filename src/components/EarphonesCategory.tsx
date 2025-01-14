import ProductItem from "@/components/ProductItem";

async function getProductZero() {
  const res = await fetch('http://localhost:4000/0')
  return res.json()
}

export default async function EarphonesCategory() {
  const productsZero = await getProductZero()

  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] space-y-[7.5rem] lg:space-y-40 mt-16 mb-28 sm:mt-[7.5rem] sm:mb-32 lg:my-40">
      {/* YX1 Wireless Earphones */}
      <ProductItem name={productsZero.name} description={productsZero.description} categoryImageDesk={productsZero.categoryImage.desktop}
        newItem="NEW PRODUCT" link="/products/yx1-earphone"
        categoryImageTablet={productsZero.categoryImage.tablet} categoryImageMobile={productsZero.categoryImage.mobile} direction="right" />
    </section>
  );
}