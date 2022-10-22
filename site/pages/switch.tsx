
import Switch from '@cui/switch/switch'
import { useState } from 'react'

const Home = () => {
  const [checked, setChecked] = useState(false)
  const label = 'This is switch'
  return (
    <>
      <div className='flex flex-col gap-4'>
        <Switch
          size='sm'
          checked={checked}
          onChange={setChecked}
          label={label}
        />
        <Switch
          size='md'
          checked={checked}
          onChange={setChecked}
          label={label}
        />
        <Switch
          size='lg'
          checked={checked}
          onChange={setChecked}
          label={label}
        />

        <div className='text-lg font-bold'>Other states</div>
        <Switch
          required
          checked={checked}
          onChange={setChecked}
          label={'Required'}
        />
        <Switch
          disabled
          checked={checked}
          onChange={setChecked}
          label={'Disabled'}
        />
      </div>
    </>
  )
}

export default Home
