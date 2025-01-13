import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="">
      <Button variant={"destructive"}>See Product</Button>
      <Input type="email" placeholder="Email" />
    </main>
  );
}
