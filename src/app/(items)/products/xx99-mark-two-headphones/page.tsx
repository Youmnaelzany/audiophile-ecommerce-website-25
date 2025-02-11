import AddToCartBtn from '@/components/AddToCartBtn';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: "XX99 Mark II Headphones | Audiophile",
};

async function getProduct() {
  const res = await fetch('http://localhost:4000/3')
  return res.json()
}

export default async function HeadphoneXx99MarkTwo() {
  const product = await getProduct();
  return (
    <main className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] pt-4 sm:pt-8 lg:pt-20">
      <div>
        <Link href="/products/zx7-speaker" className='text-black/50 text-[0.9375rem] leading-[1.5625rem] font-normal'>
          Go Back
        </Link>
      </div>
      <section className="space-y-[5.5rem] sm:space-y-[7.5rem] lg:space-y-40 pb-32 pt-4 sm:pt-6 lg:pt-14 lg:pb-40">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-8 sm:gap-x-[4.34rem] lg:gap-x-[7.81rem]">
          {/* Images */}
          <picture>
            <source media="(min-width:1024px)" srcSet={product.image.desktop} />
            <source media="(min-width:768px)" srcSet={product.image.tablet} />
            <img src={product.image.mobile} alt={product.name} className='rounded-lg' />
          </picture>
          {/* Details */}
          <div className="flex flex-col gap-y-6 sm:gap-y-8">
            <div className="space-y-6 sm:space-y-4">
              <span className="text-sm text-orange font-normal leading-normal uppercase tracking-[0.625rem]">New Product</span>
              <h2 className="w-[20.4375rem] text-black text-[1.75rem] leading-normal tracking-[0.0625rem] uppercase font-bold sm:leading-8 sm:tracking-[0.08931rem] lg:text-[2.5rem] lg:leading-[2.75rem]">{product.name}</h2>
            </div>
            <p className="text-[0.9375rem] font-normal leading-[1.5625rem] w-[20.4375rem] sm:w-[21.1875rem] lg:w-[27.8125rem]">{product.description}</p>
            <h3 className="text-lg font-bold leading-normal uppercase tracking-[0.08038rem] text-black">${product.price}</h3>
            <AddToCartBtn product={product} />
          </div>
        </div>
        {/* Features & In the Box */}
        <div className="flex flex-col gap-y-[5.5rem] sm:gap-y-[7.5rem] lg:gap-x-[7.81rem] lg:flex-row lg:justify-between">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl text-black font-bold leading-9 tracking-[0.05356rem] uppercase sm:text-[2rem] sm:tracking-[0.07144rem]">Features</h2>
            <p className="text-[0.9375rem] font-normal leading-[1.5625rem] text-black/50 w-[20.4375rem] sm:w-[43.0625rem] lg:w-[39.6875rem]">{product.features}</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
            <h2 className="text-2xl text-black font-bold tracking-[0.05356rem] uppercase sm:text-[2rem] leading-9 sm:tracking-[0.07144rem] sm:w-[21.1875rem]">In the Box</h2>
            <div className="space-y-2">
              {product.includes.map((item: { quantity: number; item: string }, index: number) => (
                <h3 key={index} className="text-black/50 text-[0.9375rem] font-normal leading-[1.5625rem]">
                  <span className="text-orange mr-6">{item.quantity}x</span>{item.item}
                </h3>
              ))}
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-8 sm:flex-row">
          <div className="flex flex-col gap-y-4 sm:gap-y-5 lg:gap-y-8">
            <picture>
              <source media="(min-width:1024px)" srcSet={product.gallery.first.desktop} />
              <source media="(min-width:768px)" srcSet={product.gallery.first.tablet} />
              <img src={product.gallery.first.mobile} alt="Gallery 1" className='rounded-lg' />
            </picture>
            <picture>
              <source media="(min-width:1024px)" srcSet={product.gallery.second.desktop} />
              <source media="(min-width:768px)" srcSet={product.gallery.second.tablet} />
              <img src={product.gallery.second.mobile} alt="Gallery 2" className='rounded-lg' />
            </picture>
          </div>
          <picture>
            <source media="(min-width:1024px)" srcSet={product.gallery.third.desktop} />
            <source media="(min-width:768px)" srcSet={product.gallery.third.tablet} />
            <img src={product.gallery.third.mobile} alt="Gallery 3" className='rounded-lg' />
          </picture>
        </div>
      </section>
      <section className="pb-[9.5rem] lg:pb-40 flex flex-col items-center justify-center text-center gap-y-10 sm:gap-y-14 lg:gap-y-16">
        <h2 className="uppercase text-black text-2xl font-bold leading-9 tracking-[0.05356rem] sm:text-[2rem] sm:tracking-[0.07144rem]">You May Also Like</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-y-14 sm:gap-x-[0.62rem] lg:gap-x-[1.87rem]">
          {product.others.map((otherProduct: { image: { desktop: string; tablet: string; mobile: string }; name: string; slug: string }, index: number) => (
            <div key={index}>
              <picture>
                <source media="(min-width:1024px)" srcSet={otherProduct.image.desktop} />
                <source media="(min-width:768px)" srcSet={otherProduct.image.tablet} />
                <img src={otherProduct.image.mobile} alt={otherProduct.name} className='rounded-lg' />
              </picture>
              <h3 className="pt-8 pb-8 sm:pt-10 text-black text-2xl font-bold leading-none tracking-[0.10713rem] uppercase">{otherProduct.name}</h3>
              <Button asChild>
                <Link href={`/products/${otherProduct.slug}`} className="text-orange">See Products</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}