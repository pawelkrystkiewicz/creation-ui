import clsx from 'clsx'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
  variant?: ContainerVariants
}

type ContainerVariants = 'row' | 'column'

const classes: Record<ContainerVariants | 'base', string[]> = {
  base: ['flex', 'my-10'],
  column: ['flex-col', 'items-center', 'gap-5'],
  row: ['justify-center', 'place-items-center', 'gap-5'],
}

export const Container = ({
  children,
  className,
  variant = 'row',
  ...props
}: ContainerProps) => (
  <div className={clsx(classes.base, classes[variant], className)} {...props}>
    {children}
  </div>
)
