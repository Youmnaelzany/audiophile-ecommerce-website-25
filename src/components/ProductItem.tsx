import Link from "next/link";
import { Button } from "./ui/button";

export default function ProductItem({ name, description, categoryImageDesk, newItem, link, categoryImageTablet, categoryImageMobile }: { name: string, description: string, categoryImageDesk: string, newItem?: string, link: string, categoryImageTablet: string, categoryImageMobile: string }) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-8 sm:gap-y-[3.25rem] lg:gap-x-[7.81rem] items-center justify-center lg:justify-between">
      <picture>
        <source media="(min-width:1024px)" srcSet={categoryImageDesk} />
        <source media="(min-width:768px)" srcSet={categoryImageTablet} />
        <img src={categoryImageMobile} alt={name}  className="flex-1 rounded-lg" />
      </picture>
      <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-start gap-y-6 sm:gap-y-4 flex-1">
        <span className="text-orange text-sm font-normal leading-normal uppercase tracking-[0.625rem]">{newItem}</span>
        <h1 className="w-[17.4375rem] text-black text-[1.75rem] font-bold tracking-[0.0625rem]
         uppercase sm:w-[22.75rem] sm:text-[2.5rem] sm:leading-[2.75rem] sm:tracking-[0.08931rem] lg:w-[21.75rem]">
          {name}
        </h1>
        <p className="sm:mb-2 lg:mb-6 w-[19.4375rem] text-[0.9375rem] font-normal leading-[1.5625rem]
         text-black/50 sm:w-[27.75rem]">
          {description}
        </p>
        <Button asChild>
          <Link href={link}>see product</Link>
        </Button>
      </div>
    </div> 
  );
}