import Icon from '@components/icon/icon'
import { NavigationTitle } from '@components/navigation/navigation'
import Switch from '@components/switch/switch'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <NavigationTitle />

      <div className="flex flex-col gap-4">
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </div>
    </>
  )
}

export default Home
