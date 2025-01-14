import ProductItem from "@/components/ProductItem";

async function getProductFour() {
  const res = await fetch('http://localhost:4000/4')
  return res.json()
}
async function getProductFive() {
  const res = await fetch('http://localhost:4000/5')
  return res.json()
}

export default async function SpeakersCategory() {
  const productsFour = await getProductFour()
  const productsFive = await getProductFive()

  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] space-y-[7.5rem] lg:space-y-40 mt-16 mb-28 sm:mt-[7.5rem] sm:mb-32 lg:my-40">
      {/* ZX9 Speaker */}
      <ProductItem name={productsFive.name} description={productsFive.description} categoryImageDesk={productsFive.categoryImage.desktop}
        newItem={productsFive.newItem} link="/products/zx9-speaker"
        categoryImageTablet={productsFive.categoryImage.tablet} categoryImageMobile={productsFive.categoryImage.mobile}
        direction="right"
      />
      {/* ZX7 Speaker */}
      <ProductItem name={productsFour.name} description={productsFour.description} categoryImageDesk={productsFour.categoryImage.desktop}
        newItem="NEW PRODUCT" link="/products/zx9-speaker"
        categoryImageTablet={productsFour.categoryImage.tablet} categoryImageMobile={productsFour.categoryImage.mobile} direction="left" />
    </section>
  );
}