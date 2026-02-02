import { menuData } from '@/data/menu';
import Image from 'next/image';

export default function PaginaDescricao({ params }: { params: { nome: string } }) {
  const todosItens = [...menuData.comidas, ...menuData.bebidas];
    const item = todosItens.find((p) => p.slug === params.nome);

      if (!item) return <div className="h-screen flex items-center justify-center font-light text-gray-400 uppercase tracking-widest">Item não encontrado</div>;

        return (
            <main className="h-screen w-full bg-[#FCFCFC] text-[#1A1A1A] flex overflow-hidden font-sans antialiased">
                  
                        {/* DIV 1: Imagem (60% da tela) */}
                              <div className="w-[60%] h-full relative bg-[#F5F5F5]">
                                      <Image 
                                                src={item.imagem} 
                                                          alt={item.nome}
                                                                    fill
                                                                              className="object-cover"
                                                                                        priority
                                                                                                />
                                                                                                      </div>

                                                                                                            {/* DIV 2: Informações (40% da tela) */}
                                                                                                                  <div className="w-[40%] h-full flex flex-col justify-center px-12 lg:px-24">
                                                                                                                          
                                                                                                                                  <header className="mb-10">
                                                                                                                                            <h1 className="text-4xl lg:text-6xl font-extralight tracking-tighter leading-tight mb-6">
                                                                                                                                                        {item.nome}
                                                                                                                                                                  </h1>
                                                                                                                                                                            <p className="text-2xl font-light text-gray-400 italic">
                                                                                                                                                                                        R$ {item.preco}
                                                                                                                                                                                                  </p>
                                                                                                                                                                                                          </header>

                                                                                                                                                                                                                  <div className="h-[1px] w-16 bg-black mb-10 opacity-20"></div>

                                                                                                                                                                                                                          <section className="max-w-xs">
                                                                                                                                                                                                                                    <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-300 mb-4">
                                                                                                                                                                                                                                                Descrição
                                                                                                                                                                                                                                                          </h2>
                                                                                                                                                                                                                                                                    <p className="text-lg text-gray-500 leading-relaxed font-light italic">
                                                                                                                                                                                                                                                                                {item.descricao}
                                                                                                                                                                                                                                                                                          </p>
                                                                                                                                                                                                                                                                                                  </section>

                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                              