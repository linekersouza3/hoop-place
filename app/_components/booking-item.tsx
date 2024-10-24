import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

//TODO: RECEBER AGENDAMENTO COMO PROP

const BookingItem = () => {
    return ( 
        <>
            <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Agendamentos</h2>
            <Card>
            <CardContent className="flex justify-between p-0">
                <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de Cabelo</h3>
                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"/>
                    </Avatar>
                    <p className="text-sm">Barbearia do João</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                <p className="text-sm">Outubro</p>
                <p className="text-2xl">23</p>
                <p className="text-sm">20:00</p>
                </div>
            </CardContent>
            </Card>
        </>
    );
}
 
export default BookingItem;