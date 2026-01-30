import './globals.css'

export const metadata = {
  title: 'Meu Site',
    description: 'Criado com Next.js',
    }

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode
        }) {
          return (
              <html lang="en">
                    <body>{children}</body>
                        </html>
                          )
                          }
                          
