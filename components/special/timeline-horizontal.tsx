import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { calculateSchedule, calculateStartingPoints, minSinceMidnight } from './helpers'
import { TimelineHorizontalProps, Schedule } from './types'

const roundness = 'rounded-sm'

const hours = new Array(25).fill(0).map((_, idx) => ({
  hour: idx,
  start: idx === 0 ? 1 : idx * 4,
}))

const TimelineHorizontal = ({ className, events, schedule }: TimelineHorizontalProps) => {
  const [now, setNow] = useState(new Date().toISOString())

  const nowGrid = Math.trunc(minSinceMidnight(now) / 15)
  const withDuration = calculateStartingPoints(events)

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date().toISOString()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className={clsx('w-full grid grid-cols-96 grid-rows-4  bg-slate-200 h-10', roundness, className)}>
        {withDuration.map(({ color, id, time, title, steps: { end, start } }, idx) => (
          <>
            <div
              key={id}
              title={`${title} - ${new Date(time).toLocaleString()}`}
              style={{ background: color, gridColumn: `${start} / ${end}`, gridRow: '1 / 4' }}
              className={clsx(roundness, end <= nowGrid && 'opacity-75')}
            />
          </>
        ))}
        <div
          className={clsx('bg-red-700/20 border-red-400 border-r-2 z-10')}
          title={`Now: ${now}`}
          style={{
            gridColumn: `1 / ${nowGrid}`,
            gridRow: '1 / -1',
          }}
        />
        <TimelineSchedule schedule={schedule} className={clsx(roundness)} />
        {hours.map(({ hour, start }) => (
          <div
            className={clsx('z-20 h-1 relative border-l', 'border-black')}
            title={hour.toString()}
            key={hour.toString()}
            style={{
              gridColumn: `${start} / ${start}`,
              gridRow: '1 / 1',
            }}>
            <span className="absolute top-0 left-0 transform -translate-y-4 -translate-x-1" style={{ fontSize: 8 }}>
              {hour}
              <sup>00</sup>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export const TimelineSchedule = ({ schedule, className }: { className?: string; schedule?: Schedule }) => {
  if (!schedule) {
    return null
  }

  const { start, end, color } = calculateSchedule(schedule)
  return (
    <div
      className={clsx(className)}
      title={`Schedule`}
      style={{
        gridColumn: `${start} / ${end}`,
        gridRow: '4 / 4',
        background: color,
      }}
    />
  )
}

export default TimelineHorizontal
