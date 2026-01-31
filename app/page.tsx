
import MenuButton from '../components/MenuButton';

export default function Home() {
    return (
        <div className="flex h-screen overflow-hidden">
         {/* IMAGEM (70%) */}
                  <section className="w-[70%] h-full flex justify-center items-center bg-[#FDFBF7]">
                  {/* Container que força o quadrado */}
                        <div className="w-[70%] relative aspect-square overflow-hidden shadow-sm flex rounded-xl">
                              <img 
                                    src="/comidas.jpg" 
                                    className="w-full h-full object-cover" 
                                    alt="Café"
                               />
                               <div className="absolute inset-0 flex items-start justify-center p-12">
                                        <h1 className="text-black text-8xl font-serif">Oferta do dia</h1>
                                          
                              </div>
                        </div>
                  </section>
                  {/* Opcoes(30%) */}
                   <section className="w-[30%] bg-[#FFFFFF] flex flex-col justify-center items-center p-6 gap-6">
                        <div className="w-[70%] h-[10%] overflow-hidden shadow-sm flex">
                              <img
                              src="/logo.jpg"
                              className="w-full h-full object-cover"
                              alt="Logo"
                              />
                        </div>                           
                        <MenuButton titulo="Comidas" imagem="/cafe.jpg" />   
                        <MenuButton titulo="Bebidas" imagem="/bebidas.jpg" />
                  </section>
        </div>
       );
}

