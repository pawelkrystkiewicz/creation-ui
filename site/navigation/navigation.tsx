import { Button } from '@cui/button'
import { Icon } from '@cui/core'
import { Link, useLocation } from 'react-router-dom'

export const NavigationTitle = () => {
  const location = useLocation()

  return (
    <h3 className='flex gap-4 items-center capitalize font-bold text-3xl md:text-5xl'>
      <Button rounded='circle' variant='outlined' size='sm'>
        <Link to={-1 as any}>
          <Icon icon='arrow_back' />
        </Link>
      </Button>
      {location.pathname.split('/')[1]}
    </h3>
  )
}
