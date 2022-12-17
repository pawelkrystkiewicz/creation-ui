import { cva } from 'class-variance-authority'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const card = cva([], {
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

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={card({ body: 'base', className })}>
      <div className={card({ content: 'base' })}>{children}</div>
    </div>
  )
}
