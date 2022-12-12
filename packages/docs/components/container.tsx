import clsx from 'clsx'
import React, { Children } from 'react'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
  variant?: ContainerVariants
}

type ContainerVariants = 'row' | 'column'

const classes: Record<ContainerVariants | 'base' | 'centered', string[]> = {
  base: ['flex', 'my-10'],
  column: ['flex-col', 'items-center', 'gap-10'],
  row: ['place-items-center', 'justify-between', 'max-w-3xl', 'mx-auto'],
  centered: ['justify-center', 'place-items-center', 'gap-5'],
}

export const Container = ({
  children,
  className,
  variant = 'row',
  ...props
}: ContainerProps) => {
  const count = Children.count(children)
  const v = count > 1 ? variant : 'centered'
  return (
    <div className={clsx(classes.base, classes[v], className)} {...props}>
      {children}
    </div>
  )
}
