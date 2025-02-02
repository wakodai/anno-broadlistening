'use client'

import {Result} from '@/type'
import {ScatterChart} from '@/components/charts/ScatterChart'
import {SunburstChart} from '@/components/charts/SunburstChart'
import {TreemapChart} from '@/components/charts/TreemapChart'
import {useState} from 'react'
import {Box, Heading, Text} from '@chakra-ui/react'
import {SelectChartButton} from '@/components/charts/SelectChartButton'

type ReportProps = {
  result: Result
}

export function Report({result}: ReportProps) {
  const [selectedChart, setSelectedChart] = useState('scatter')
  return (
    <Box>
      {/* 見出し */}
      <Box mx={'auto'} maxW={'800px'} mb={5}>
        <Heading as={'h2'} size={'3xl'} mb={2} className={'headingColor'}>{result.config.question}</Heading>
        <p>{result.overview}</p>
      </Box>
      {/* チャート */}
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
      {/* 解説 */}
      {result.clusters.filter(c => c.level === 1).map(c => (
        <Box key={c.id} mx={'auto'} maxW={'800px'} my={10}>
          <Heading fontSize={'2xl'} mb={4} className={'headingColor'}>{c.label}</Heading>
          <Text>{c.takeaway}</Text>
        </Box>
      ))}
      {/*<pre style={{fontSize: '10px'}}>{JSON.stringify(result, null, 2)}</pre>*/}
    </Box>
  )
}
