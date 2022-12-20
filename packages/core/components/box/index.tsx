import { cva } from 'class-variance-authority'

interface BoxProps {
  children: React.ReactNode
  className?: string
}

const box = cva([], {
  variants: {
    body: {
      base: ['flex', 'justify-center'],
    },
    content: {
      base: [
        'block',
        'p-5',
        'rounded-lg',
        'shadow-lg',
        'bg-gray-50',
        'dark:bg-gray-800',
        'dark:text-gray-50',
      ],
    },
  },
})

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={box({ body: 'base', className })}>
      <div className={box({ content: 'base' })}>{children}</div>
    </div>
  )
}
