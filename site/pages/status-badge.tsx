import { ElementSize } from '@creation-ui/core'
import { StatusBadge } from 'packages/status-badge'

const DrawerPage = () => {
  const statuses = ['success', 'warning', 'error', 'active', undefined]
  const sizes: ElementSize[] = ['sm', 'md', 'lg']

  return (
    <div className='flex flex-col gap-5'>
      {statuses.map(s => (
        <StatusBadge label={s ?? 'Status'} status={s as any} key={s} />
      ))}
      {sizes.map(size => (
        <StatusBadge
          label={`Status - ${size}`}
          status={'success'}
          key={size}
          size={size}
        />
      ))}
    </div>
  )
}

export default DrawerPage
