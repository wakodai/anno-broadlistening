import {Cluster} from '@/type'
import {PlotData} from 'plotly.js'
import React from 'react'
import {ChartCore} from './ChartCore'

type Props = {
  clusterList: Cluster[]
}

export function SunburstChart({clusterList}: Props) {
  const ids = clusterList.map(node => node.id)
  const labels = clusterList.map(node => node.label)
  const parents = clusterList.map(node => node.parent)
  const values = clusterList.map(node => node.value)

  const data: Partial<PlotData & {maxdepth: number}> = {
    type: 'sunburst',
    ids: ids,
    labels: labels,
    parents: parents,
    values: values,
    branchvalues: 'total',
    hovertemplate: '<b>%{label}</b><br>%{value:,}件<br>%{percentEntry:.2%}<extra></extra>',
    texttemplate: '%{label}<br>%{percentEntry:.2%}',
    maxdepth: 3,
  }

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    extendsunburstcolorway: true,
    colorway: ['#b4d8a4','#f3c7d8','#d6e5ef','#f9ebc3','#83b6c7'],
  }

  return (
    <ChartCore
      data={[data]}
      layout={layout}
      useResizeHandler={true}
      style={{width: '100%', height: '100%'}}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
    />
  )
}
