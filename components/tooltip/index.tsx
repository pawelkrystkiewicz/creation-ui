import clsx from 'clsx'
import { TooltipProps } from './tooltip.types'
import { twMerge } from 'tailwind-merge'

const main = [
  'pointer-events-none',
  'absolute',
  '-top-10',
  'left-1/2',
  '-translate-x-1/2',
  'whitespace-nowrap',
  'rounded',
  'bg-black',
  'px-2',
  'py-1',
  'text-white',
  'opacity-0',
  'transition',
  'before:absolute',
  'before:left-1/2',
  'before:top-full',
  'before:-translate-x-1/2',
  'before:border-4',
  'before:border-transparent',
  'before:border-t-black',
  "before:content-['']",
  'group-hover:opacity-100',
  'text-sm',
]

const Tooltip = ({ className, children, content, ...props }: TooltipProps) => {
  return (
    <div className="group relative max-w-fit">
      <div className={twMerge(main, className)} {...props}>
        {content}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
