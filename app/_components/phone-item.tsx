"use client"

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProp {
    phone : string
}


const PhoneItem = ({phone} : PhoneItemProp)   => {

    const handleCopyPhoneClick = (phone: string) => {
        navigator.clipboard.writeText(phone)
        toast.success("Contato copiado com sucesso!")
    }

    return (  
        <div className="flex justify-between" key={phone}>
            <div className="flex items-center gap-2">
                <SmartphoneIcon />
                <p className="text-sm">{phone}</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => handleCopyPhoneClick(phone)}>Copiar</Button>
        </div> 
    )
}
 
export default PhoneItem;