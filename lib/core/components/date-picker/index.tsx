import Icon from '@root/lib/components/icon'
import clsx from 'clsx'
import React from 'react'
import ReactDatePicker from 'react-datepicker'
import { DatePickerProps } from './date-picker.types'
import './date-picker.scss'

const iconClasses = 'w-5 h-5 text-gray-600 cursor-pointer'

const ChevronRight = () => <Icon icon='chevron_right' className={iconClasses} />
const ChevronLeft = () => <Icon icon='chevron_left' className={iconClasses} />

const DatePicker = ({ className, ...props }: DatePickerProps) => {
  return (
    <div className={clsx('relative w-auto', className)}>
      <ReactDatePicker {...props} />
    </div>
  )
}

DatePicker.defaultProps = {
  popperClassName: 'react-datepicker-left',
  nextMonthButtonLabel: <ChevronRight />,
  previousMonthButtonLabel: <ChevronLeft />,
}

export default DatePicker
