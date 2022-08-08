import Checkbox from '@components/checkbox/checkbox'
import Icon from '@components/icon/icon'
import { NavigationTitle } from '@components/navigation/navigation'
import Switch from '@components/switch/switch'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const checked = true
  const variants = [
    {
      title: 'Small',
      props: { size: 'sm', checked, label: 'Small' },
    },
    {
      title: 'Medium',
      props: { size: 'md', checked, label: 'Medium' },
    },
    {
      title: 'Large',
      props: { size: 'lg', checked, label: 'Large' },
    },
    {
      title: 'Disabled checked',
      props: { disabled: true, checked, label: 'Disabled checked' },
    },
    {
      title: 'Disabled unchecked',
      props: { disabled: true, label: 'Disabled unchecked' },
    },
    {
      title: 'Indeterminate',
      props: { indeterminate: true, label: 'Indeterminate' },
    },
  ]

  return (
    <>
      <NavigationTitle />
      <div>
        {variants.map(({ title, props }) => (
          <div className="w-full" key={title}>
            <p>{title}</p>
            <Checkbox {...(props as any)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
