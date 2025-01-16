"use client";


import ProductItem from "@/components/ProductItem";
import { useProducts } from "@/hooks/useProducts";

export default function SpeakersCategory() {
  const { products, loading, error } = useProducts([4, 5]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const [productsFour, productsFive] = products;

  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] space-y-[7.5rem] lg:space-y-40 mt-16 mb-[9.5rem] sm:mt-[7.5rem] sm:mb-32 lg:my-40">
      <ProductItem
        name={productsFive.name}
        description={productsFive.description}
        categoryImageDesk={productsFive.categoryImage.desktop}
        newItem="NEW PRODUCT"
        link="/products/zx9-speaker"
        categoryImageTablet={productsFive.categoryImage.tablet}
        categoryImageMobile={productsFive.categoryImage.mobile}
        direction="right"
      />
      <ProductItem
        name={productsFour.name}
        description={productsFour.description}
        categoryImageDesk={productsFour.categoryImage.desktop}
        link="/products/zx7-speaker"
        categoryImageTablet={productsFour.categoryImage.tablet}
        categoryImageMobile={productsFour.categoryImage.mobile}
        direction="left"
      />
    </section>
  );
}
