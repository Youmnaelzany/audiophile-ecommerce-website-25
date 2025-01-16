"use client";

import ProductItem from "@/components/ProductItem";
import { useProducts } from "@/hooks/useProducts";

export default function EarphonesCategory() {
  const { products, loading, error } = useProducts([0]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const productsZero = products[0];

  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] space-y-[7.5rem] lg:space-y-40 mt-16 mb-[9.5rem] sm:mt-[7.5rem] sm:mb-32 lg:my-40">
      <ProductItem
        name={productsZero.name}
        description={productsZero.description}
        categoryImageDesk={productsZero.categoryImage.desktop}
        newItem="NEW PRODUCT"
        link="/products/yx1-earphones"
        categoryImageTablet={productsZero.categoryImage.tablet}
        categoryImageMobile={productsZero.categoryImage.mobile}
        direction="right"
      />
    </section>
  );
}
