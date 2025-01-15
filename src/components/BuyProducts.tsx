import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  name: string,
  description: string,
  categoryImageDesk: string,
  newItem?: string,
  link: string,
  categoryImageTablet: string,
  categoryImageMobile: string
  direction: "left" | "right"
}
