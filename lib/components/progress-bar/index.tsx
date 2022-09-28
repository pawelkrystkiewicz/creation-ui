import { selector } from './progress-bar.classes'
import { ProgressBarProps } from './progress-bar.types'

const formatDisplayValueDefault = (value: number) => `${value}%`

const ProgressBar = (props: ProgressBarProps) => {
  const {
    value = 0,
    showValue = false,
    formatDisplayValue = formatDisplayValueDefault,
    className,
    size = 'sm',
    ...rest
  } = props
  const classes = selector(props)

  return (
    <div className={classes('wrapper')} {...props}>
      <div
        className={classes('bar')}
        style={{ width: formatDisplayValueDefault(value) }}
      >
        {showValue && formatDisplayValue(value)}
      </div>
    </div>
  )
}

export default ProgressBar
