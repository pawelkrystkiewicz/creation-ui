import Icon from '@components/icon'
import { Link, useLocation, useNavigation } from 'react-router-dom'
import Button from '@components/button'

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
