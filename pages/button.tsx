import ButtonGroup from '@components/button/button.group'
import Icon from '@components/icon'
import { NavigationTitle } from '@components/navigation/navigation'
import type { NextPage } from 'next'
import Button from '../components/button'

const Home: NextPage = () => {
  const ButtonIcon = <Icon icon="search" />
  return (
    <>
      <NavigationTitle />
      <div className="flex gap-3 m-5">
        <Button loading size="lg" color={'blue'}>
          Hello
        </Button>
        <Button loading variant="outlined" size="lg" color={'blue'}>
          World
        </Button>
        <Button loading variant="text" size="lg" color={'blue'}>
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
        <Button iconLeft={ButtonIcon}>Hello</Button>
        <Button variant="outlined" iconRight={ButtonIcon}>
          Click me
        </Button>
        <Button variant="text">Link</Button>
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
      <div className="flex flex-col gap-3 m-5">
        <ButtonGroup>
          <Button variant="outlined">Pizza</Button>
          <Button variant="outlined">Burger</Button>
          <Button variant="outlined">Fries</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Pizza</Button>
          <Button>Burger</Button>
          <Button>Fries</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default Home
