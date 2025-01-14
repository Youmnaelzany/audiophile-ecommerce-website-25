import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "../../public/assets/shared/desktop/icon-arrow-right.svg";
import HeadPhones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarPhones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

import type { StaticImageData } from 'next/image';

const MyCategory = ({ name, link, categoryImg }: { name: string, link: string, categoryImg: StaticImageData }) => {
  return (
    <div className="w-[20.4375rem] h-[10.3125rem] bg-light-grey flex flex-col justify-end items-center
     gap-6 rounded-lg pb-[1.38rem] lg:pb-[1.88rem] sm:w-[13.9375rem] lg:w-[21.875rem] lg:h-[12.75rem]">
      <Image src={categoryImg} alt="Category Image" width={150} height={160} className="relative -bottom-8 lg:w-[180px]" />
      <div className="flex flex-col justify-end items-center gap-6 sm:w-[13.9375rem] sm:h-[10.3125rem] lg:w-[21.875rem] lg:h-[12.75rem]">
        <h2 className="text-black font-bold leading-normal uppercase tracking-[0.06694rem] text-[0.9375rem]">{name}</h2>
        <Link href={link} className="text-[0.8125rem] font-bold leading-normal tracking-[0.0625rem] text-black/50 uppercase flex items-center gap-[0.88rem] hover:text-orange cursor-pointer transition-colors ease-in-out duration-300">
          Shop
          <Image src={ArrowIcon} alt="Arrow Icon" width={5} height={10} />
        </Link>
      </div>
    </div>
  );
}

export default function CategoryItems() {
  return (
    <section className="px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] flex flex-col gap-24 sm:flex-row sm:gap-x-[0.69rem] lg:gap-x-[1.88rem] items-center justify-center sm:justify-between pt-16 pb-8">
      <MyCategory name="Headphones" link="/category/headphones" categoryImg={HeadPhones} />
      <MyCategory name="Speakers" link="/category/speakers" categoryImg={Speakers} />
      <MyCategory name="Earphones" link="/category/earphones" categoryImg={EarPhones} />
    </section>
  );
}