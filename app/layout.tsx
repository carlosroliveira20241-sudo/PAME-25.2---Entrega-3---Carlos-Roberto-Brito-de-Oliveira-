import './globals.css'
import SidebarButton from '../components/SidebarButton'

export const metadata = {
  title: 'Meu Site',
    }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      {/* O 'flex' aqui no body é o que coloca um do lado do outro */}
      <body className="flex min-h-screen">
        
        {/* LADO 1: A SIDEBAR (Largura fixa) */}
        <aside className="w-[15vw] border-r border-gray-200 flex-col p-10">
          <SidebarButton titulo="home" icone="/homeicon.png" destino="/"/>
          <SidebarButton titulo="comidas" icone="/comidasicon.png" destino="/cardapio/comidas"/>
          <SidebarButton titulo="bebidas" icone="/bebidasicon.png" destino="/cardapio/bebidas"/>
        </aside>

        {/* LADO 2: O CONTEÚDO (Ocupa o resto da tela) */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}
                        
