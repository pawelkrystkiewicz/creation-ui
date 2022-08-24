const formatDisplayValueDefault = (value: number) => `${value}%`

interface ProgressBarProps {
  value: number
  className?: string
  showValue?: boolean
  formatDisplayValue: (value: number) => string
}

const ProgressBar = ({
  value = 0,
  showValue = false,
  formatDisplayValue = formatDisplayValueDefault,
  className,
  ...props
}: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700" {...props}>
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        style={{ width: value }}>
        {showValue && formatDisplayValueDefault(value)}
      </div>
    </div>
  )
}

export default ProgressBar
