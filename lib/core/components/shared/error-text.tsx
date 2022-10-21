interface ErrorTextProps {
  error?: React.ReactNode
}

const ErrorText = ({ error }: ErrorTextProps) =>
  error ? <span className='form-element--error'>{error}</span> : null

export default ErrorText
