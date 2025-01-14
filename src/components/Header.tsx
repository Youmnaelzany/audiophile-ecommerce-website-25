import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Logo from "../../public/assets/shared/desktop/logo.svg"
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

interface Props {
  color: 'lightBlack' | 'black';
}

const colorClasses = {
  lightBlack: 'bg-[#191919]',
  black: 'bg-black'
};
export default function Header({ color }: Props) {
  const textColorClass = colorClasses[color];
  return (
    <header className={`w-full h-24 px-6 sm:pl-[2.44rem] sm:pr-10 lg:px-[10.31rem] flex items-center justify-between ${textColorClass}`}>
      <div className="flex items-center gap-[2.63rem]">
        <MobileMenu />
        <Link href="/">
          <Image src={Logo} alt="Logo" width={143} height={25} />
        </Link>
      </div>
      <nav className="hidden lg:block">
        <NavLinks />
      </nav>
      <ShoppingCart className="text-white" size={30} />
    </header>
  );
}