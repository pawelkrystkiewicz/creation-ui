import { Icon } from '@cui/core'
import { ToggleGroup, ToggleGroupOption } from '@cui/toggle-group'

import { useState } from 'react'

const Home = () => {
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
      label: <Icon icon='format_align_left' />,
      value: 'format_align_left',
    },
    {
      label: <Icon icon='format_align_center' />,
      value: 'format_align_center',
    },
    {
      label: <Icon icon='format_align_right' />,
      value: 'format_align_right',
    },
    {
      label: <Icon icon='format_align_justify' />,
      value: 'format_align_justify',
    },
  ]

  const [value, setValue] = useState(options[1].value)
  const [style, setStyle] = useState(styling[1].value)

  console.log(value)

  return (
    <>
      <div className='flex flex-col gap-10'>
        <h2 className='py-3 font-bold text-xl'>Date range</h2>
        <ToggleGroup
          options={options}
          value={value}
          onChange={setValue}
          size='sm'
          title='Select a time period'
        />
        <ToggleGroup
          options={options}
          value={value}
          onChange={setValue}
          size='md'
          title='Select a time period'
        />
        <ToggleGroup
          options={[
            {
              label: '3 days',
              value: '3',
            },
            {
              label: 'week',
              value: '7',
              disabled: true,
            },
            {
              label: 'month',
              value: '30',
            },
            {
              label: 'year',
              value: '365',
            },
          ]}
          value={value}
          onChange={setValue}
          size='lg'
          title='Select a time period'
          required={true}
        />
      </div>
      {/* <div className='flex flex-col gap-3'>
        <h2>Styles</h2>
        <ToggleGroup
          options={styling}
          value={style}
          onChange={setStyle}
          size='sm'
          title='Select style'
        />
        <ToggleGroup
          options={styling}
          value={style}
          onChange={setStyle}
          size='md'
          title='Select style'
        />
        <ToggleGroup
          options={styling}
          value={style}
          onChange={setStyle}
          size='lg'
          title='Select style'
        />
      </div> */}
    </>
  )
}

export default Home
