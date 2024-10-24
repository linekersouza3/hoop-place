import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";

const Home = async () => {

  const barbershops = await db.barberShop.findMany({})
  const popularBarbershops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    }
  })

  return ( 
    <div>
      <Header/>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lineker!</h2>
        <p>Quarta-feira, 23 de outubro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."/>
          <Button>
            <SearchIcon/>
          </Button>
        </div>

        <div className="flex gap-3 mt-6 overflow-x-scroll [&:: -webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" width={16} height={16} alt="Cabelo"/>
            Cabelo
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" width={16} height={16} alt="Barba"/>
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/acabamento.svg" width={16} height={16} alt="Acabamento"/>
            Acabamento
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/hidratacao.svg" width={16} height={16} alt="Hidratação"/>
            Hidratação
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/sobrancelha.svg" width={16} height={16} alt="Sobrancelha"/>
            Sobrancelha
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image alt="Agende com os melhores no HoopPlace" src="/banner-01.png" fill className="rounded-xl object-cover"/>
        </div>

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

        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&:: -webkit-scrollbar]:hidden">
          {barbershops.map(barbershop => 
            <BarberShopItem key={barbershop.id} barbershop={barbershop}/>
          )}
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Populares</h2>
        <div className="flex gap-4 overflow-auto [&:: -webkit-scrollbar]:hidden">
          {popularBarbershops.map(barbershop => 
            <BarberShopItem key={barbershop.id} barbershop={barbershop}/>
          )}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="py-6 px-5">
            <p className="text-sm text-gray-400">2024 Copyright <span className="font-bold">Hoop Place</span></p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
 
export default Home;