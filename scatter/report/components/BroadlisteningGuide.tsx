import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader, DialogRoot,
  DialogTrigger
} from '@/components/ui/dialog'
import {Button, Heading, Text} from '@chakra-ui/react'
import {CircleHelpIcon} from 'lucide-react'

export function BroadlisteningGuide() {
  return (
    <DialogRoot size="lg" placement="center" motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
        <Button variant={'outline'}>
          <CircleHelpIcon />
          <Text display={{ base: 'none', lg: 'block' }}>ブロードリスニングについて</Text>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Heading as={'h2'} size={'xl'} mb={2} className={'headingColor'}>ブロードリスニングとは？</Heading>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          ブロードリスニングとは「広く声を収集し、収集した声をAI技術で分析・可視化する手法」です。
          広く社会全体の声を聴き、政策に反映することは行政の基本とされていますが、これまでは意見を集める方法も限られており、さらに収集した声の分析も手作業が中心だったため、多くの時間と労力を要していました。
          AIの活用というと、デジタルでの声だけを拾うというイメージがあるかもしれませんが、今回のブロードリスニングでは、XやYouTubeなどのSNSの書き込みに加えて、郵送での意見募集や街角でのヒアリングも対象としています。SNSの特性を活かし、スマホで気軽にコメントできる仕組みを活用しつつ、デジタル媒体を使わない方々の声も丁寧に収集しました。これにより、これまで以上に多くの意見を短期間で集め、分析・可視化(見える化）することが可能になります。
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}
