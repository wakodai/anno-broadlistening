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
    <DialogRoot size="cover" placement="center" motionPreset="slide-in-bottom">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}
