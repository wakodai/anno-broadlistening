import {RadioCardItem, RadioCardRoot} from '@/components/ui/radio-card'
import {HStack, Icon, useBreakpointValue} from '@chakra-ui/react'
import {ChartScatterIcon, LifeBuoyIcon, SquareSquareIcon} from 'lucide-react'
import React from 'react'

type Props = {
  selected: string
  onChange: (value: string) => void
}

export function SelectChartButton({selected, onChange}: Props) {
  return (
    <RadioCardRoot
      orientation="horizontal"
      align="center"
      justify="center"
      w={'100%'}
      maxW={'xl'}
      size={'sm'}
      display={'block'}
      value={selected}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      colorPalette={'cyan'}
    >
      <HStack align={'stretch'}>
        <RadioCardItem
          value={'scatter'}
          label={useBreakpointValue({ base: '', md: '散布図' })}
          indicator={false}
          icon={<Icon><ChartScatterIcon /></Icon>}
        />
        <RadioCardItem
          value={'sunburst'}
          label={useBreakpointValue({ base: '', md: 'サンバースト' })}
          indicator={false}
          icon={<Icon><LifeBuoyIcon /></Icon>}
        />
        <RadioCardItem
          value={'treemap'}
          label={useBreakpointValue({ base: '', md: 'ツリーマップ' })}
          indicator={false}
          icon={<Icon><SquareSquareIcon /></Icon>}
        />
      </HStack>
    </RadioCardRoot>
  )
}
