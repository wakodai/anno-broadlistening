import fs from 'fs'
import { Report } from '@/components/Report'
import type {Metadata} from 'next'

const file = fs.readFileSync(`../pipeline/outputs/${process.env.REPORT}/result.json`, 'utf8')
const result = JSON.parse(file)

export const metadata: Metadata = {
  title: `${result.config.question} - デジタル民主主義2030 ブロードリスニング`,
  description: `${result.config.question} ${result.overview}`,
}

export default function Page() {
  return (
    <Report result={result} />
  )
}
