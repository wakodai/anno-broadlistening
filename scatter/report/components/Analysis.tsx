'use client'

import {Result} from '@/type'
import {Box, Heading, Separator, Text} from '@chakra-ui/react'

type ReportProps = {
  result: Result
}

export function Analysis({result}: ReportProps) {
  return (
    <Box mx={'auto'} maxW={'800px'} mb={12}>
      <Separator my={12} />
      <Heading textAlign={'center'} fontSize={'xl'} mb={5}>Analysis</Heading>
      <Text fontSize={'sm'}>{result.config.intro}</Text>
      {/*<pre style={{fontSize: '10px'}}>{JSON.stringify(result, null, 2)}</pre>*/}
    </Box>
  )
}
