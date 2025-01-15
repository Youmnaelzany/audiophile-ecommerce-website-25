import ProductItem from "@/components/ProductItem";

async function getProductThree() {
  const res = await fetch('http://localhost:4000/3')
  return res.json()
}
async function getProductTwo() {
  const res = await fetch('http://localhost:4000/2')
  return res.json()
}
async function getProductOne() {
  const res = await fetch('http://localhost:4000/1')
  return res.json()
}

export default async function HeadphonesCategory() {
  const productsThree = await getProductThree()
  const productsTwo = await getProductTwo()
  const productsOne = await getProductOne()

  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] space-y-[7.5rem] lg:space-y-40 mt-16 mb-[9.5rem] sm:mt-[7.5rem] sm:mb-32 lg:my-40">
      {/* xx99-mark-two-headphones */}
      <ProductItem name={productsThree.name} description={productsThree.description} categoryImageDesk={productsThree.categoryImage.desktop}
        newItem="NEW PRODUCT" link="/products/xx99-mark-two-headphones"
        categoryImageTablet={productsThree.categoryImage.tablet} categoryImageMobile={productsThree.categoryImage.mobile} direction="right" />
      {/* xx99-mark-one-headphones */}
      <ProductItem name={productsTwo.name} description={productsTwo.description} categoryImageDesk={productsTwo.categoryImage.desktop}
        newItem={productsTwo.newItem} link="/products/xx99-mark-one-headphones"
        categoryImageTablet={productsTwo.categoryImage.tablet} categoryImageMobile={productsTwo.categoryImage.mobile}
        direction="left"
      />
      {/* xx59-headphone */}
      <ProductItem name={productsOne.name} description={productsOne.description} categoryImageDesk={productsOne.categoryImage.desktop}
        newItem={productsOne.newItem} link="/products/xx59-headphones"
        categoryImageTablet={productsOne.categoryImage.tablet} categoryImageMobile={productsOne.categoryImage.mobile}
        direction="right"
      />
    </section>
  );
}