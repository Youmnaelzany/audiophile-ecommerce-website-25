import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import CategoryItems from "./CategoryItems";



export default function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet >
        <SheetTrigger>
          <Menu className=" text-white" size={30} />
        </SheetTrigger>
        <SheetContent side={"top"} className="py-10 pt-24 flex items-center justify-center">
          <CategoryItems />
        </SheetContent>
      </Sheet>
    </div>

  );
}