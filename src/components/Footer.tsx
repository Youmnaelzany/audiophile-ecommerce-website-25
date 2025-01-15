import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/shared/desktop/logo.svg"
import NavLinks from "./NavLinks";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-light-black w-full px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] pt-16 pb-11 space-y-12 sm:space-y-8 lg:space-y-9">
      <div className="flex flex-col items-center justify-center sm:items-start lg:flex-row lg:justify-between gap-y-12 sm:gap-y-8">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={143} height={25} />
        </Link>
        <NavLinks />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center sm:items-end sm:justify-between text-center sm:text-left gap-y-12">
        <p className="text-[0.9375rem] text-white/50 font-normal leading-[1.5625rem] lg:w-[33.75rem] sm:w-[43.0625rem] w:[20.4375rem] sm:col-start-1 sm:col-end-7 lg:col-start-1 lg:col-end-3">
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility-we&apos;re open 7 days a week.
        </p>
        <h3 className="text-[0.9375rem] text-white/50 font-normal leading-[1.5625rem] lg:order-last">
          Copyright 2021. All Rights Reserved
        </h3>
        <div className="flex items-center gap-x-4 justify-center sm:items-start sm:justify-end lg:col-end-7 lg:col-span-2  lg:items-end">
          <Link href="/">
            <IoLogoFacebook className="text-white hover:text-orange transition-colors duration-300 ease-in-out " size={30} />
          </Link>
          <Link href="/">
            <FaXTwitter className="text-white hover:text-orange transition-colors duration-300 ease-in-out " size={30} />
          </Link>
          <Link href="/">
            <FaInstagram className="text-white hover:text-orange transition-colors duration-300 ease-in-out " size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );

}