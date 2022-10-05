import Input from '@root/lib/components/input'
import { NavigationTitle } from '@root/site/navigation/navigation'

import { useState } from 'react'

const Home = () => {
  const defaultValue = 'Brown fox jumps over the lazy dog'
  const variants = [
    {
      props: { size: 'sm', label: 'Small input', defaultValue, loading: true },
    },
    {
      props: { size: 'md', label: 'Medium input', defaultValue },
    },
    {
      props: { size: 'md', label: 'Read only', readOnly: true, defaultValue },
    },
    {
      props: { size: 'lg', label: 'Large input', defaultValue },
    },
    {
      props: { disabled: true, label: 'Disabled input', defaultValue },
    },
    {
      props: { label: 'Number', defaultValue: 1234, type: 'number' },
    },
    {
      props: {
        size: 'sm',
        label: 'Small input fullwidth',
        fullWidth: true,
        defaultValue,
      },
    },
    {
      props: {
        size: 'sm',
        label: 'Placeholder & required',
        placeholder: 'I am just a placeholder',
        required: true,
      },
    },
  ]

  const [input, setInput] = useState(defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)

  return (
    <>
      <div>
        {variants.map(({ props }, idx) => (
          <div className='w-full' key={idx}>
            <Input {...(props as any)} />
          </div>
        ))}
        <div className='w-full' key={1}>
          <Input
            size={'md' as any}
            onChange={handleChange}
            value={input}
            label='Controlled input'
          />
        </div>
      </div>
    </>
  )
}

export default Home
