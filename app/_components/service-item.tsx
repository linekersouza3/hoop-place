import { BarberShopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProp {
    service: BarberShopService
}

const ServiceItem = ({service} : ServiceItemProp) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-3 p-3">
                <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                    <Image alt={service.name} src={service.imageUrl} fill className="object-cover rounded-lg"/>
                </div>
                <div className="space-y-2">
                    <h3 className="font-semibold text-sm">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-primary">
                            {Intl.NumberFormat("pt-BR", {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(Number(service.price))}
                        </p>
                        <Button variant="secondary" size="sm">Reservar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
 
export default ServiceItem;