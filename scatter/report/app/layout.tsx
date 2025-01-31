import ClientProvider from './ClientProvider'
import './global.css'

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html suppressHydrationWarning lang={'ja'}>
      <body>
        <div className={'container'}>
          <ClientProvider>
            {children}
          </ClientProvider>
        </div>
        <footer>
          デジタル民主主義2030 ブロードリスニング
        </footer>
      </body>
    </html>
  )
}
