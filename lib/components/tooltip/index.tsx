import { TooltipProps } from './tooltip.types'
import { twMerge } from 'tailwind-merge'
import { selector } from './tooltip.classes'
import React from 'react'

const Tooltip = ({ className, children, content, ...props }: TooltipProps) => {
  const styles = selector(props)
  return (
    <div className={styles('wrapper')}>
      <div className={twMerge(styles('tooltip'), className)} {...props}>
        {content}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
