import AddToCartBtn from '@/components/AddToCartBtn';
import Link from 'next/link';
export const metadata = {
  title: "YX1 Wireless Earphones | Audiophile",
};

async function getProduct() {
  const res = await fetch('http://localhost:4000/0')
  return res.json()
}

export default async function EarphoneYx1() {
  const product = await getProduct();
  return (
    <main className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem]">
      <div>
        <Link href="/products/zx7-speaker" className='text-black/50 text-[0.9375rem] leading-[1.5625rem] font-normal'>
          Go Back
        </Link>
      </div>
      <section className="">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-8 sm:gap-x-[4.34rem] lg:gap-x-[7.81rem]">
          {/* Images */}
          <picture>
            <source media="(min-width:1024px )" srcSet={product.image.desktop} />
            <source media="(min-width:768px )" srcSet={product.image.tablet} />
            <img src={product.image.mobile} alt={product.name} className='rounded-lg' />
          </picture>
          {/* Details */}
          <div className="flex flex-col gap-y-6 sm:gap-y-8">
            {/* Name */}
            <div className="space-y-6 sm:space-y-4">
              <span className="">New Product</span>
              <h2 className="">{product.name}</h2>
            </div>
            {/* Description */}
            <p className="">{product.description}</p>
            {/* Price */}
            <h3 className="">${product.price}</h3>
            {/* Add to cart Btn */}
            <AddToCartBtn />
          </div>
        </div>
      </section>
    </main>
  )
}