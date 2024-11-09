import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
// import { Avatar } from "./ui/avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogContent, DialogTrigger} from "./ui/dialog";

const SideBarSheet = () => {
    return ( 
        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="py-5 border-b border-solid flex items-center gap-3 justify-between">
                <h2 className="font-bold text-lg">Olá, Faça seu login!</h2>
                <Dialog>
                    <DialogTrigger>
                        <Button size="icon">
                            <LogInIcon/>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%] object-cover rounded-lg">
                        <DialogHeader>
                            <DialogTitle>Faça login na plataforma</DialogTitle>
                            <DialogDescription>
                                Conecte-se usando uma conta do Google
                            </DialogDescription>
                        </DialogHeader>
                        <Button variant="outline" className="gap-1 font-bold">
                            <Image alt="Login google" src="/google.svg" width={18} height={18}/>
                            Google
                        </Button>
                    </DialogContent>
                </Dialog>
                {/* <Avatar>
                    <AvatarImage src="https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></AvatarImage>
                </Avatar>
                <div>
                    <p className="font-bold">Juciane Maluca</p>
                    <p className="text-xs">juciane@mail.com</p>
                </div> */}
            </div>
            <div className="py-5 flex flex-col gap-2 border-b border-solid">
                <SheetClose asChild>
                    <Button className="gap-2 justify-start" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18}/>
                            Início
                        </Link>
                    </Button>
                </SheetClose>
                <Button className="gap-2 justify-start" variant="ghost">
                    <CalendarIcon size={18}/>
                    Agendamentos
                </Button>
            </div>

            <div className="py-5 flex flex-col gap-2 border-b border-solid">
                {quickSearchOptions.map(option => (
                    <Button key={option.title} className="gap-2 justify-start" variant="ghost">
                        <Image alt={option.title} src={option.imageUrl} height={18} width={18}/>
                        {option.title}
                    </Button>
                ))}
            </div>

            <div className="py-5 flex flex-col gap-2">
                <Button className="gap-2 justify-start" variant="ghost">
                    <LogOutIcon size={18}/>
                    Sair da conta
                </Button>
            </div>
        </SheetContent>
    );
}
 
export default SideBarSheet;