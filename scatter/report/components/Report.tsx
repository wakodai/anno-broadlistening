'use client'

import {Result} from '@/type'
import {ScatterChart} from '@/components/charts/ScatterChart'
import {SunburstChart} from '@/components/charts/SunburstChart'
import {TreemapChart} from '@/components/charts/TreemapChart'
import {useState} from 'react'
import {Box, Heading} from '@chakra-ui/react'
import {SelectChartButton} from '@/components/charts/SelectChartButton'

type ReportProps = {
  result: Result
}

export function Report({result}: ReportProps) {
  const [selectedChart, setSelectedChart] = useState('scatter')
  return (
    <Box>
      <Box mx={'auto'} maxW={'800px'} mb={5}>
        <Heading as={'h2'} size={'3xl'} mb={2} className={'headingColor'}>{result.config.question}</Heading>
        <p>{result.overview}</p>
      </Box>
      <Box mx={'auto'} w={'100%'} maxW={'1200px'} p={5}>
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
      {/*<pre style={{fontSize: '10px'}}>{JSON.stringify(result, null, 2)}</pre>*/}
    </Box>
  )
}
