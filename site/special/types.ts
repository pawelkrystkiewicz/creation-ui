export type TimelineEvent = {
  title: string
  id: string
  color: string
  time: string
}

export type TimelineEventWithDuration = TimelineEvent & {
  duration: number
  steps: {
    start: number
    end: number
  }
}

export type Schedule = {
  color: string
  start: string
  end: string
}
export type TimelineSchedule = {
  color: string
  start: number
  end: number
}

export interface TimelineHorizontalProps {
  className?: string
  events: TimelineEvent[]
  schedule?: Schedule
}
