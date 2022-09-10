import { settings } from '@components/settings'
import { selector } from './radio-group.classes'
import { RadioGroupProps } from './radio-group.types'

// document.addEventListener("visibilitychange", () => {
//   // it could be either hidden or visible
//   document.title = document.visibilityState;
// });

const RadioGroupComponent = ({ children, ...props }: RadioGroupProps) => {
  const { helperText, error, label } = props
  const classes = selector(props)
  return (
    <div className={classes('wrapper')}>
      <span className={classes('label')}>{label}</span>
      <div className={classes('children')}>{children}</div>
      {helperText && <div className={classes('helperText')}>{helperText}</div>}
      <span className={classes('error')}>{error ?? settings.defaultTexts.invalidInput ?? ''}</span>
    </div>
  )
}

RadioGroupComponent.defaultProps = {
  size: 'md',
  orientation: 'vertical',
}

export default RadioGroupComponent
