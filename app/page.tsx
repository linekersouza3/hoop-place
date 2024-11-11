import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";

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

        <div className="mt-6">
          <Search />
        </div>

        <div className="flex gap-3 mt-6 overflow-x-scroll [&:: -webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option => 
            <Button 
              key={option.title} className="gap-2" variant="secondary">
              <Image src={option.imageUrl} width={16} height={16} alt={option.title}/>
              {option.title}
            </Button>
          )}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image alt="Agende com os melhores no HoopPlace" src="/banner-01.png" fill className="rounded-xl object-cover"/>
        </div>

        <BookingItem/>

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
    </div>
  );
}
 
export default Home;