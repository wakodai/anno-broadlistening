import fs from 'fs'
import { Report } from '@/components/Report'
import type {Metadata} from 'next'
import {Heading, HStack} from '@chakra-ui/react'
import {BroadlisteningGuide} from '@/components/BroadlisteningGuide'

const file = fs.readFileSync(`../pipeline/outputs/${process.env.REPORT}/result.json`, 'utf8')
const result = JSON.parse(file)

export const metadata: Metadata = {
  title: `${result.config.question} - デジタル民主主義2030 ブロードリスニング`,
  description: `${result.config.question} ${result.overview}`,
}

export default function Page() {
  return (
    <div>
      <HStack justify="space-between" mb={8}>
        <Heading as={'h1'} size={'lg'} fontWeight={'bold'} className={'gradientColor'}>デジタル民主主義2030 ブロードリスニング</Heading>
        <BroadlisteningGuide />
      </HStack>
      <Report result={result} />
    </div>
  )
}
