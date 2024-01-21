import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="bg-gradient-to-r from-slate-700 to-blue-950 border-slate-600"><GiHamburgerMenu /> </Button>
      </SheetTrigger>
      <SheetContent>
      <ul className="grid justify-center w-full h-full items-center bg-gradient-to-r from-slate-700 to-blue-950 font-bold  text-black">
            <Link href="/"><li className="flex justify-center hover:bg-white hover:text-black hover:p-1 md:hover:w-[250px] hover:w-[150px] hover:rounded-lg">Home</li></Link>
            <Link href="/aboutMe"><li className="flex justify-center hover:bg-white hover:text-black hover:p-1 md:hover:w-[250px] hover:w-[150px] hover:rounded-lg">About Me</li></Link>
            <Link href="/project"><li className="flex justify-center hover:bg-white hover:text-black hover:p-1 md:hover:w-[250px] hover:w-[150px] hover:rounded-lg">Projects</li></Link>
            <Link href="/Contact"><li className="flex justify-center hover:bg-white hover:text-black hover:p-1 md:hover:w-[250px] hover:w-[150px] hover:rounded-lg">Contact</li></Link>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
