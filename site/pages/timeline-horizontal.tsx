import { events } from 'site/special/fakeData'
import TimelineHorizontal from 'site/special/timeline-horizontal'
import { Schedule, TimelineEvent } from 'site/special/types'

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
