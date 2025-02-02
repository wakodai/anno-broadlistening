'use client'

import {Result} from '@/type'
import {Box, Button, Heading, Separator, Text} from '@chakra-ui/react'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle
} from '@/components/ui/timeline'
import {CircleArrowRightIcon} from 'lucide-react'
import {
  DrawerActionTrigger,
  DrawerBackdrop, DrawerBody, DrawerCloseTrigger,
  DrawerContent, DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle
} from '@/components/ui/drawer'

type ReportProps = {
  result: Result
}

export function Analysis({result}: ReportProps) {

  return (
    <Box mx={'auto'} maxW={'750px'} mb={12}>
      <Separator my={12} />
      <Heading textAlign={'center'} fontSize={'xl'} mb={5}>Analysis</Heading>
      <Text fontSize={'sm'} mb={5}>{result.config.intro}</Text>
      <Box>
        <Heading fontSize={'md'} mb={5}>分析手順</Heading>
        <TimelineRoot>
          {result.config.plan.map(p => (
            <TimelineItem key={p.step}>
              <TimelineConnector>
                <CircleArrowRightIcon />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle>{p.step}</TimelineTitle>
                <TimelineDescription>
                  {p.step === 'extraction' && (
                    <Text fontSize={'xs'}></Text>
                  )}
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineRoot>
      </Box>

      <DrawerRoot>
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  )
}
