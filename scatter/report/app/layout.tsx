// import { Noto_Sans_JP, Roboto, JetBrains_Mono } from 'next/font/google'
import ClientProvider from './ClientProvider'
import './global.css'

// TODO FIXME
// next/font と assetPrefix の相性問題があり、以下の issue が解決されるまでは利用不可
// ISSUE https://github.com/vercel/next.js/issues/52050

// const notoSansJP = Noto_Sans_JP({
//   weight: ['400', '700'],
//   style: 'normal',
//   subsets: ['latin'],
// })
// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: 'normal',
//   subsets: ['latin'],
// })
// const jetBrainsMono = JetBrains_Mono({
//   weight: ['400'],
//   style: 'normal',
//   subsets: ['latin'],
// })

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    // <html suppressHydrationWarning lang={'ja'} className={`${roboto.className} ${jetBrainsMono.className} ${notoSansJP.className} `}>
    <html suppressHydrationWarning lang={'ja'}>
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
