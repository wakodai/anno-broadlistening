import { Noto_Sans_JP, Roboto, JetBrains_Mono } from 'next/font/google'
import ClientProvider from './ClientProvider'
import './global.css'
import {Heading, HStack, Image, Text} from '@chakra-ui/react'
import {BroadlisteningGuide} from '@/components/BroadlisteningGuide'

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

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html suppressHydrationWarning lang={'ja'} className={`${roboto.className} ${jetBrainsMono.className} ${notoSansJP.className} `}>
      <body>
        <ClientProvider>
          <div className={'container'}>
            <HStack justify="space-between" mb={8}>
              <Heading as={'h1'} size={'lg'} fontWeight={'bold'} className={'gradientColor'}>デジタル民主主義2030
                ブロードリスニング</Heading>
              <BroadlisteningGuide/>
            </HStack>
            {process.env.REPORTER_IMAGE && (
              <Image
                src={process.env.REPORTER_IMAGE}
                mx={'auto'}
                objectFit={'cover'}
                maxH={'100px'}
                maxW={'200px'}
                alt={process.env.REPORTER_NAME}
              />
            )}
            {children}
          </div>
          <footer>
            <Text fontWeight={'bold'}>{process.env.REPORTER_NAME}</Text>
            <Text>デジタル民主主義2030 ブロードリスニング</Text>
          </footer>
        </ClientProvider>
      </body>
    </html>
  )
}
