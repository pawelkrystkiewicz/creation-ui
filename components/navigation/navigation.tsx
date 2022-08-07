import Icon from '@components/icon/icon'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Button from '@components/button/button'

export const NavigationTitle = () => {
  const router = useRouter()
  const goBack = () => router.back()

  return (
    <h3 className="flex gap-4">
      <Button rounded="circle" variant="outlined" onClick={goBack} size="sm">
        <Icon icon="arrow_back" />
      </Button>
      {router.pathname}
    </h3>
  )
}
