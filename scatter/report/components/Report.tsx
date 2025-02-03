'use client'

import {Result} from '@/type'
import {ScatterChart} from '@/components/charts/ScatterChart'
import {SunburstChart} from '@/components/charts/SunburstChart'
import {TreemapChart} from '@/components/charts/TreemapChart'
import {useState} from 'react'
import {Box, Heading, Icon, Text} from '@chakra-ui/react'
import {SelectChartButton} from '@/components/charts/SelectChartButton'
import {MessageSquareIcon} from 'lucide-react'

type ReportProps = {
  result: Result
}

export function Report({result}: ReportProps) {
  const [selectedChart, setSelectedChart] = useState('scatter')
  return (
    <Box>
      <Box mx={'auto'} maxW={'750px'} mb={5}>
        <Heading textAlign={'center'} fontSize={'xl'} mb={5}>Report</Heading>
        <Heading as={'h2'} size={'3xl'} mb={2} className={'headingColor'}>{result.config.question}</Heading>
        <p>{result.overview}</p>
      </Box>
      <Box mx={'auto'} w={'100%'} maxW={'1200px'} p={5} mb={10}>
        <Box h={'500px'} mb={5}>
          {selectedChart === 'scatter' && (
            <ScatterChart clusterList={result.clusters} argumentList={result.arguments} />
          )}
          {selectedChart === 'sunburst' && (
            <SunburstChart clusterList={result.clusters} />
          )}
          {selectedChart === 'treemap' && (
            <TreemapChart clusterList={result.clusters} />
          )}
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <SelectChartButton selected={selectedChart} onChange={setSelectedChart} />
        </Box>
      </Box>
      {result.clusters.filter(c => c.level === 1).map(c => (
        <Box key={c.id} mx={'auto'} maxW={'750px'} my={12}>
          <Box mb={2}>
            <Heading fontSize={'2xl'} className={'headingColor'} mb={1}>{c.label}</Heading>
            <Text fontWeight={'bold'}><Icon mr={1}><MessageSquareIcon size={20} /></Icon>{c.value}コメント</Text>
          </Box>
          <Text>{c.takeaway}</Text>
        </Box>
      ))}
    </Box>
  )
}
