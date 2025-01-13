import Image from "next/image";
import BestGearMob from "../../public/assets/shared/mobile/image-best-gear.jpg";
import BestGearTab from "../../public/assets/shared/tablet/image-best-gear.jpg";
import BestGeardesk from "../../public/assets/shared/desktop/image-best-gear.jpg";
export default function BestGear() {
  return (
    <section className="flex flex-col gap-y-8 sm:gap-y-12 lg:gap-x-20 items-center justify-center lg:justify-between lg:flex-row-reverse">
      <picture>
        <source media="(min-width:768px)" srcSet={BestGeardesk.src} />
        <source media="(min-width:1024px)" srcSet={BestGearTab.src} />
        <Image src={BestGearMob} alt="Best Audio Gear" className="rounded-lg" />
      </picture>
      <div className="space-y-8 flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-start w-[20.4375rem] sm:w-[35.8125rem] lg:w-[29.8125rem]">
        <h2 className="uppercase text-[1.75rem] font-bold tracking-[0.0625rem] sm:tracking-[0.08931rem] leading-normal sm:text-[2.5rem] sm:leading-[2.75rem] text-black">Bringing you the <span className="text-orange">best</span> audio gear</h2>
        <p className="text-[0.9375rem] leading-[1.5625rem] text-black/50 font-normal">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}