import {
  Schedule,
  TimelineEvent,
  TimelineEventWithDuration,
  TimelineSchedule,
} from './types'

export const dateDiffMinutes = (start: string, end: string): number => {
  const diff = Math.abs(new Date(start).getTime() - new Date(end).getTime())
  // to minutes
  return diff / (1000 * 60)
}

export const minSinceMidnight = (date: string): number => {
  const midnight = new Date(date).setHours(0, 0, 0, 0)
  const diff = Math.abs(midnight - new Date(date).getTime())
  // to minutes
  return diff / (1000 * 60)
}

export const calculateStartingPoints = (
  events: TimelineEvent[]
): TimelineEventWithDuration[] =>
  events.reduce((acc: any = [], event, idx) => {
    const nextEventTime = events[idx + 1]?.time ?? new Date().toISOString()
    const start = Math.floor(minSinceMidnight(event.time) / 15)
    let end = Math.floor(minSinceMidnight(nextEventTime) / 15) - 1
    if (start > end) {
      end = start + 1
    }

    const duration = dateDiffMinutes(event.time, nextEventTime)

    return (acc = [
      ...acc,
      {
        ...event,
        duration,
        steps: { start, end },
      },
    ])
  }, [])

export const calculateSchedule = (s: Schedule): TimelineSchedule => {
  const start = Math.floor(minSinceMidnight(s.start) / 15)
  const end = Math.floor(minSinceMidnight(s.end) / 15) - 1

  return {
    ...s,
    start,
    end,
  }
}
