import './globals.css'

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
        <aside className="w-[15vw] border-r border-gray-200">
          {/* Aqui vai entrar o seu Menu depois */}
          <p className="p-4 text-gray-400">placeholder</p>
        </aside>

        {/* LADO 2: O CONTEÚDO (Ocupa o resto da tela) */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}
                        
