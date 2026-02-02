import { menuData } from '@/data/menu';
import CardProduto from '@/components/CardProduto';

export default function PaginaBebidas() {
      return (
            // h-screen e overflow-hidden travam a tela para não ter scroll
            <main className="h-screen w-full bg-[#FCFCFC] text-[#1A1A1A] overflow-hidden flex flex-col p-6 lg:p-10">

                  {/* Título simples e direto */}
                  <header className="flex-none mb-6">
                        <h1 className="text-2xl lg:text-3xl font-extralight tracking-tighter uppercase">
                              Bebidas
                        </h1>
                  </header>

                  {/* Grid que organiza os Cards */}
                  <div className="flex-1 flex items-center justify-center min-h-0">
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 w-full max-h-full">
                              {menuData.bebidas.map((item) => (
                                    <CardProduto
                                          key={item.id}
                                          id={item.slug}
                                          nome={item.nome}
                                          preco={item.preco}
                                          imagem={item.imagem}
                                    />
                              ))}
                        </div>
                  </div>
            </main>
      );
}
