import Link from "next/link";
function LinkList({ link, linkTitle }: { link: string, linkTitle: string }) {
  return (
    <li>
      <Link href={link} className="text-[0.8125rem] text-white font-bold leading-[1.5625rem] tracking-[0.125rem] uppercase hover:text-orange transition-colors duration-300 ease-in-out">{linkTitle}</Link>
    </li>

  );
}
export default function NavLinks() {
  return (
    <ul className="flex items-center sm:flex-row flex-col justify-center gap-y-4 text-center sm:items-start sm:justify-between sm:gap-x-[2.12rem] lg:items-center">
      <LinkList link="/" linkTitle="Home" />
      <LinkList link="/category/headphones" linkTitle="Headphones" />
      <LinkList link="/category/speakers" linkTitle="Speakers" />
      <LinkList link="/category/earphones" linkTitle="Earphones" />
    </ul>
  );
}