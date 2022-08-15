import { NavigationTitle } from '@components/navigation/navigation'
import ToggleGroup from '@components/toggle-group/toggle'
import { ToggleGroupOption } from '@components/toggle-group/toggle-group.types'
import type { NextPage } from 'next'
import { useState } from 'react'

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

  const [value, setValue] = useState(options[1].value)

  return (
    <>
      <NavigationTitle />
      <div className="flex flex-col gap-3">
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
    </>
  )
}

export default Home
