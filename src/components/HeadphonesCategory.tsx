"use client";

import ProductItem from "@/components/ProductItem";
import { useProducts } from "@/hooks/useProducts";

export default function HeadphonesCategory() {
  const { products, loading, error } = useProducts([1, 2, 3]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const [productsOne, productsTwo, productsThree] = products;

  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] space-y-[7.5rem] lg:space-y-40 mt-16 mb-[9.5rem] sm:mt-[7.5rem] sm:mb-32 lg:my-40">
      <ProductItem
        name={productsThree.name}
        description={productsThree.description}
        categoryImageDesk={productsThree.categoryImage.desktop}
        link="/products/xx99-mark-two-headphones"
        categoryImageTablet={productsThree.categoryImage.tablet}
        categoryImageMobile={productsThree.categoryImage.mobile}
        direction="right"
      />
      <ProductItem
        name={productsTwo.name}
        description={productsTwo.description}
        categoryImageDesk={productsTwo.categoryImage.desktop}
        link="/products/xx99-mark-one-headphones"
        categoryImageTablet={productsTwo.categoryImage.tablet}
        categoryImageMobile={productsTwo.categoryImage.mobile}
        direction="left"
      />
      <ProductItem
        name={productsOne.name}
        description={productsOne.description}
        categoryImageDesk={productsOne.categoryImage.desktop}
        newItem="NEW PRODUCT"
        link="/products/xx59-headphones"
        categoryImageTablet={productsOne.categoryImage.tablet}
        categoryImageMobile={productsOne.categoryImage.mobile}
        direction="right"
      />
    </section>
  );
}
