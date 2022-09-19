import Icon from '@components/icon'
import { useRouter } from 'next/router'
import Button from '@components/button'

export const NavigationTitle = () => {
  const router = useRouter()
  const goBack = () => router.back()

  return (
    <h3 className="flex gap-4 items-center capitalize font-bold text-3xl md:text-5xl">
      <Button rounded="circle" variant="outlined" onClick={goBack} size="sm">
        <Icon icon="arrow_back" />
      </Button>
      {router.pathname.split('/')[1]}
    </h3>
  )
}
