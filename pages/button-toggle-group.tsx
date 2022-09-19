import { NavigationTitle } from '@components/navigation/navigation'
import ToggleGroup from '@components/toggle-group'
import { ToggleGroupOption } from '@components/toggle-group/toggle-group.types'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Icon } from '..'

const Home: NextPage = () => {
  const options: ToggleGroupOption[] = [
    {
      label: '3 days',
      value: '3',
    },
    {
      label: 'week',
      value: '7',
    },
    {
      label: 'month',
      value: '30',
    },
    {
      label: 'year',
      value: '365',
    },
  ]

  const styling = [
    {
      label: <Icon icon="format_align_left" />,
      value: 'format_align_left',
    },
    {
      label: <Icon icon="format_align_center" />,
      value: 'format_align_center',
    },
    {
      label: <Icon icon="format_align_right" />,
      value: 'format_align_right',
    },
    {
      label: <Icon icon="format_align_justify" />,
      value: 'format_align_justify',
    },
  ]

  const [value, setValue] = useState(options[1].value)
  const [style, setStyle] = useState(styling[1].value)

  return (
    <>

      <div className="flex flex-col gap-3">
        <h2>Date range</h2>
        <ToggleGroup options={options} value={value} onChange={setValue} size="sm" title="Select a time period" />
        <ToggleGroup options={options} value={value} onChange={setValue} size="md" title="Select a time period" />
        <ToggleGroup
          options={options}
          value={value}
          onChange={setValue}
          size="lg"
          title="Select a time period"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2>Styles</h2>
        <ToggleGroup options={styling} value={style} onChange={setStyle} size="sm" title="Select style" />
        <ToggleGroup options={styling} value={style} onChange={setStyle} size="md" title="Select style" />
        <ToggleGroup options={styling} value={style} onChange={setStyle} size="lg" title="Select style" />
      </div>
    </>
  )
}

export default Home
