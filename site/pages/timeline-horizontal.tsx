import { events } from '@components/special/fakeData'
import TimelineHorizontal from '@components/special/timeline-horizontal'
import { Schedule, TimelineEvent } from '@components/special/types'

const Home = () => {
  const timelineEvents: TimelineEvent[] = events.map(
    ({
      event: { eventShortName, color },
      eventRegisterUUID,
      eventRegisteredAt,
    }) => ({
      title: eventShortName,
      color,
      id: eventRegisterUUID,
      time: eventRegisteredAt.toString(),
    })
  )

  const schedule: Schedule = {
    color: '#ff0000',
    start: '2022-08-13T06:00:00.000Z',
    end: '2022-08-13T14:00:00.000Z',
  }

  return <TimelineHorizontal events={timelineEvents} schedule={schedule} />
}

export default Home
