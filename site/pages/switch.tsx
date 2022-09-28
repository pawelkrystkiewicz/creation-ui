import Switch from '@root/lib/components/switch'
import { useState } from 'react'

const Home = () => {
  const [checked, setChecked] = useState(false)
  const title = 'This is switch'
  return (
    <>
      <div className='flex flex-col gap-4'>
        <Switch
          size='sm'
          checked={checked}
          onChange={setChecked}
          title={title}
        />
        <Switch
          size='md'
          checked={checked}
          onChange={setChecked}
          title={title}
        />
        <Switch
          size='lg'
          checked={checked}
          onChange={setChecked}
          title={title}
        />
      </div>
    </>
  )
}

export default Home
