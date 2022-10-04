import AnimateAppearance from '@components/animate-appearance'

interface ErrorTextProps {
  error?: React.ReactNode
}

const ErrorText = ({ error }: ErrorTextProps) => (
  <AnimateAppearance isVisible={!!error}>
    <span className='form-element--error'>{error}</span>
  </AnimateAppearance>
)

export default ErrorText
