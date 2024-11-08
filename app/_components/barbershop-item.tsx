import { BarberShop } from "@prisma/client";
import { Card, CardContent } from "./ui/card"
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarberShopItemProps {
    barbershop: BarberShop
}

const BarberShopItem = ({barbershop}: BarberShopItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                <div className="relative h-[159px] w-full">
                    <Image alt={barbershop.name} fill className="object-cover rounded-2xl" src={barbershop.imageUrl}/>
                    <Badge className="absolute top-2 left-2 space-x-1" variant="secondary">
                        <StarIcon size={12} className="fill-primary text-primary"/>
                        <p className="text-xs font-semibold">5,0</p>
                    </Badge>
                </div>

                <div className="py-3 px-1">
                    <h3 className="truncate font-semibold">{barbershop.name}</h3>
                    <p className=" truncate text-sm text-gray-400">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-3" asChild>
                        <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );

}
 
export default BarberShopItem;