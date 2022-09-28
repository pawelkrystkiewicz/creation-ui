import { NavigationTitle } from '@root/site/navigation/navigation'
import Radio from '@root/lib/components/radio'
import { ElementSize } from '@root/lib/types'

const Home = () => {
  const examples = [
    {
      label: 'Example 1',
      size: 'sm' as ElementSize,
    },
    {
      label: 'Example 2',
      size: 'md' as ElementSize,
    },
    {
      label: 'Example 3',
      size: 'lg' as ElementSize,
    },
    {
      label: 'Example 4 - disabled',
      disabled: true,
    },
    {
      label: 'Example 5 - readonly',
      readOnly: true,
      checked: true,
    },
    {
      label: 'Example 6 - required',
      size: 'sm' as ElementSize,
      required: true,
    },
  ]

  return (
    <>
      <div>
        {examples.map(props => (
          <Radio {...props} />
        ))}
      </div>
    </>
  )
}

export default Home
