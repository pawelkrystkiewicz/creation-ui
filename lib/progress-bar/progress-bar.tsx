import { useTheme } from '@cui/core'
import clsx from 'clsx'
import { ProgressBarProps } from './progress-bar.types'
import './index.scss'

const formatDisplayValueDefault = (value: number) => `${value}%`

const ProgressBar = (props: ProgressBarProps) => {
  const { defaultSize } = useTheme()
  const {
    value = 0,
    showValue = false,
    formatDisplayValue = formatDisplayValueDefault,
    className,
    size = defaultSize,
  } = props

  return (
    <div className={clsx('progress-bar--wrapper')} {...props}>
      <div
        className={clsx('progress-bar--bar', `progress-bar--bar--${size}`)}
        style={{ width: formatDisplayValueDefault(value) }}
      >
        {showValue && formatDisplayValue(value)}
      </div>
    </div>
  )
}

export default ProgressBar
