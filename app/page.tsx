
import MenuButton from '../components/MenuButton';
import { menuData } from '@/data/menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
const oferta = menuData.bebidas.find(item => item.slug === 'cappuccino-artesanal') || menuData.bebidas[0];
    return (
        <div className="flex h-screen overflow-hidden">
         {/* IMAGEM (70%) */}
                  <section className="w-[70%] h-full relative overflow-hidden group">
                                <Image 
                                          src={oferta.imagem} 
                                                    alt={oferta.nome}
                                                              fill
                                                                        className="object-cover"
                                                                                  priority
                                                                                          />
                                                                                                  
                                                                                                          {/* Overlay para contraste do texto branco */}
                                                                                                                  <div className="absolute inset-0 bg-black/10"></div>

                                                                                                                          {/* Informações Ultra Clean */}
                                                                                                                                  <div className="absolute bottom-16 left-16 text-white z-10">
                                                                                                                                            <p className="text-[10px] uppercase tracking-[0.8em] font-light mb-6 opacity-70">
                                                                                                                                                        Oferta do dia
                                                                                                                                                                  </p>
                                                                                                                                                                            <h2 className="text-6xl lg:text-8xl font-extralight tracking-tighter mb-4 italic leading-none">
                                                                                                                                                                                        {oferta.nome}
                                                                                                                                                                                                  </h2>
                                                                                                                                                                                                            <p className="text-2xl font-light tracking-[0.2em]">
                                                                                                                                                                                                                        R$ {oferta.preco}
                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                      {/* Link invisível que cobre toda a área de 70% para navegação direta */}
                                                                                                                                                                                                                                                                <Link href={`/descricao/${oferta.slug}`} className="absolute inset-0 -m-16" title="Ver detalhes" />
                                                                                                                                                                                                                                                                        </div>                                                                                                                                                                                                                                                    </section>
                  {/* Opcoes(30%) */}
                   <section className="w-[30%] bg-white flex flex-col items-center p-4 py-8 h-full overflow-hidden">
                      
                        {/* 1. Logo e Descrição (Topo) */}
                          <div className="flex flex-col items-center mb-8">
                              <div className="w-full h-16 lg:w-20 lg:h-20 overflow-hidden mb-3">
                                    <img 
                                            src="/logo.jpg" 
                                                    className="w-full h-full object-cover" 
                                                            alt="Logo" 
                                                                  />
                                                                      </div>
                                                                          <h2 className="text-[8px] lg:text-[10px] uppercase tracking-[0.3em] text-gray-400 font-light text-center leading-tight px-2">
                                                                                Cafés e <br/> Acompanhamentos
                                                                                    </h2>
                                                                                      </div>

                                                                                        {/* 2. Navegação (Centro) - Ocupa o espaço central */}
                                                                                          <nav className="flex-1 w-full flex flex-col gap-3 justify-center items-center min-h-0">
                                                                                              <MenuButton titulo="Comidas" imagem="/cafe.jpg" destino="/cardapio/comidas" />
                                                                                                  <MenuButton titulo="Bebidas" imagem="/bebidas.jpg" destino="/cardapio/bebidas" />
                                                                                                    </nav>

                                                                                                      {/* 3. Horário (Base) */}
                                                                                                        <footer className="mt-8 pt-4 border-t border-gray-50 w-full text-center">
                                                                                                            <p className="text-[7px] lg:text-[8px] uppercase tracking-[0.2em] text-gray-300 font-light">
                                                                                                                  Ter — Dom • 08-18h
                                                                                                                      </p>
                                                                                                                        </footer>

                                                                                                                        </section>
        </div>
       );
}

