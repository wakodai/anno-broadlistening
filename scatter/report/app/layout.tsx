import { Noto_Sans_JP, Roboto, JetBrains_Mono } from 'next/font/google'
import ClientProvider from './ClientProvider'
import './global.css'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
})
const jetBrainsMono = JetBrains_Mono({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html suppressHydrationWarning lang={'ja'} className={`${roboto.className} ${jetBrainsMono.className} ${notoSansJP.className} `}>
      <body>
        <ClientProvider>
          { children }
        </ClientProvider>
      </body>
    </html>
  )
}
