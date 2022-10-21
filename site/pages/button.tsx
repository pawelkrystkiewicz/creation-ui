import ButtonGroup from '@cui/core/components/button/button.group'
import Icon from '@cui/core/components/icon'
import { COLORS } from '@cui/core/types'
import { Button } from '@cui/core/components'

const Buttons = () => {
  const ButtonIcon = <Icon icon='search' />

  const coloredButtons = COLORS.map(color => (
    <Button color={color} className='capitalize'>
      {color}
    </Button>
  ))

  const set = [
    {
      label: 'Variants',
      size: 'lg',
      propsChanged: ['variant', 'size', 'color'],
      children: (
        <>
          <Button loading size='lg'>
            Hello
          </Button>
          <Button loading variant='outlined' size='lg'>
            World
          </Button>
          <Button loading variant='text' size='lg'>
            Enter
          </Button>
        </>
      ),
    },
    {
      label: 'Loading with variants',
      size: 'md (default)',
      propsChanged: ['variant', 'size', 'color', 'loading'],
      children: (
        <>
          <Button loading>Hello</Button>
          <Button loading variant='outlined'>
            Click me
          </Button>
          <Button loading variant='text'>
            Link
          </Button>
        </>
      ),
    },
    {
      label: 'Colors',
      size: 'md (default)',
      propsChanged: ['color'],
      children: coloredButtons,
    },
    {
      label: 'Loading with variants',
      size: 'md (default)',
      propsChanged: ['variant', 'size', 'color', 'loading'],
      children: (
        <>
          <Button size='sm'>Hello</Button>
          <Button size='sm' variant='outlined'>
            Click me
          </Button>
          <Button size='sm' variant='text'>
            Link
          </Button>
        </>
      ),
    },
    {
      label: 'Loading with variants',
      size: 'md (default)',
      propsChanged: ['variant', 'size', 'color', 'loading'],
      children: (
        <>
          <Button>Hello</Button>
          <Button variant='outlined'>Click me</Button>
          <Button variant='text'>Link</Button>
        </>
      ),
    },
    {
      label: '',
      size: '',
      propsChanged: [],
      children: (
        <>
          <Button size='lg'>Hello</Button>
          <Button size='lg' variant='outlined'>
            Click me
          </Button>
          <Button size='lg' variant='text'>
            Link
          </Button>
        </>
      ),
    },
    {
      label: '',
      size: '',
      propsChanged: [],
      children: (
        <>
          <Button iconLeft={ButtonIcon}>Hello</Button>
          <Button variant='outlined' iconRight={ButtonIcon}>
            Click me
          </Button>
          <Button variant='text'>Link</Button>
        </>
      ),
    },
    {
      label: '',
      size: '',
      propsChanged: [],
      children: (
        <>
          <Button rounded='circle'>{ButtonIcon}</Button>
          <Button rounded='circle' variant='outlined'>
            {ButtonIcon}
          </Button>
          <Button rounded='circle' variant='text'>
            {ButtonIcon}
          </Button>
        </>
      ),
    },
    {
      label: '',
      size: '',
      propsChanged: [],
      children: (
        <>
          <ButtonGroup>
            <Button variant='outlined'>Pizza</Button>
            <Button variant='outlined'>Burger</Button>
            <Button variant='outlined'>Fries</Button>
          </ButtonGroup>
        </>
      ),
    },
    {
      label: 'ButtonGroup Contained',
      size: 'default',
      propsChanged: [],
      children: (
        <>
          <ButtonGroup>
            <Button>Pizza</Button>
            <Button>Burger</Button>
            <Button>Fries</Button>
          </ButtonGroup>
        </>
      ),
    },
  ]

  return (
    <>
      {set.map(({ label, size, propsChanged, children }, index) => (
        <div key={index}>
          <div className='font-medium text-3xl mb-3'>{label}</div>
          <div className='font-light text-sm'>
            <div>Props Changed</div>
            {propsChanged.join(' ')}
          </div>
          <div className='flex gap-3 '>{children}</div>
        </div>
      ))}
    </>
  )
}

export default Buttons
