"use client"

import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";
// import { Avatar } from "./ui/avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogContent, DialogTrigger} from "./ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";

const SideBarSheet = () => {
    const {data} = useSession()
    const handleLoginWithGoogleClick = () => signIn("google")
    const handleLogoutClick = () => signOut()
    
    return ( 
        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="py-5 border-b border-solid flex items-center gap-3 justify-between">
                {data?.user ? (
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={data?.user.image ?? ""}></AvatarImage>
                        </Avatar>
                        <div>
                            <p className="font-bold">{data?.user.name ?? ""}</p>
                            <p className="text-xs">{data?.user.email ?? ""}</p>
                        </div>
                    </div>
                ) : (
                    <>
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
                                <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWithGoogleClick}>
                                    <Image alt="Login google" src="/google.svg" width={18} height={18}/>
                                    Google
                                </Button>
                            </DialogContent>
                        </Dialog>
                    </>
                )}
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
                <Button className="gap-2 justify-start" variant="ghost" onClick={handleLogoutClick}>
                    <LogOutIcon size={18}/>
                    Sair da conta
                </Button>
            </div>
        </SheetContent>
    );
}
 
export default SideBarSheet;