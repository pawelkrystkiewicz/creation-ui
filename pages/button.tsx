import Icon from '@components/icon/icon'
import { NavigationTitle } from '@components/navigation/navigation'
import type { NextPage } from 'next'
import Button from '../components/button/button'

const Home: NextPage = () => {
  const ButtonIcon = <Icon icon="search" />
  return (
    <>
      <NavigationTitle />
      <div className="flex gap-3 m-5">
        <Button loading size="lg" color={'indigo'}>
          Hello
        </Button>
        <Button loading variant="outlined" size="lg" color={'indigo'}>
          World
        </Button>
        <Button loading variant="text" size="lg" color={'indigo'}>
          Enter
        </Button>
      </div>
      <div className="flex gap-3 m-5">
        <Button loading>Hello</Button>
        <Button loading variant="outlined">
          Click me
        </Button>
        <Button loading variant="text" color={'red'}>
          Link
        </Button>
      </div>
      <div className="flex gap-3 m-5">
        <Button size="sm">Hello</Button>
        <Button size="sm" variant="outlined">
          Click me
        </Button>
        <Button size="sm" variant="text">
          Link
        </Button>
      </div>
      <div className="flex gap-3 m-5">
        <Button>Hello</Button>
        <Button variant="outlined">Click me</Button>
        <Button variant="text">Link</Button>
      </div>
      <div className="flex gap-3 m-5">
        <Button size="lg">Hello</Button>
        <Button size="lg" variant="outlined">
          Click me
        </Button>
        <Button size="lg" variant="text">
          Link
        </Button>
      </div>
      <div className="flex gap-3 m-5">
        <Button rounded="rounded" iconLeft={ButtonIcon}>
          Hello
        </Button>
        <Button rounded="rounded" variant="outlined" iconRight={ButtonIcon}>
          Click me
        </Button>
        <Button rounded="rounded" variant="text">
          Link
        </Button>
      </div>
      <div className="flex gap-3 m-5">
        <Button rounded="circle">{ButtonIcon}</Button>
        <Button rounded="circle" variant="outlined">
          {ButtonIcon}
        </Button>
        <Button rounded="circle" variant="text">
          {ButtonIcon}
        </Button>
      </div>
    </>
  )
}

export default Home
