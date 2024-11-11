import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Sheet, SheetTrigger } from "./ui/sheet";
import SideBarSheet from "./sidebar-sheet";
import Link from "next/link";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex flex-row items-centers justify-between">
                <Link href="/">
                    <Image alt="Logo Hoop" src="/logo.jpg" height={18} width={120}/>
                </Link>
                <Sheet> 
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon/>
                        </Button>
                    </SheetTrigger>
                    <SideBarSheet/>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;