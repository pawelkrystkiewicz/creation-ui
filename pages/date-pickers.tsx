import DatePicker from '@components/date-picker'
import { NavigationTitle } from '@components/navigation/navigation'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const datePlusOne = startDate ? new Date().setMonth(startDate?.getMonth() + 1) : null
  const [endDate, setEndDate] = useState<Date | null>(datePlusOne as any)
  const [dateRange, setDateRange] = useState([null, null])

  useEffect(() => {
    if (startDate && endDate) {
      if (startDate > endDate) setStartDate(endDate)
    }
  }, [endDate])

  useEffect(() => {
    if (startDate && endDate) {
      if (startDate > endDate) setEndDate(startDate)
    }
  }, [startDate])
  return (
    <>

      <div>
        <DatePicker
          selectsRange={true as any}
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          isClearable={true}
          onChange={update => {
            console.log(update)
            setDateRange(update as any)
          }}
        />
      </div>
    </>
  )
}

export default Home
