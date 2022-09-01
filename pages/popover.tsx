import Loader from '@components/loader'
import { NavigationTitle } from '@components/navigation/navigation'
import Popover from '@components/popover'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const Body = () => <div>Hello World</div>
  const Trigger = () => <div>Click me!</div>
  return (
    <>
      <NavigationTitle />
      <div>
        <Popover trigger={Trigger} body={Body} />
      </div>
      <div>
        <Popover
          trigger={
            <>
              I can <i>be</i> ReactNode
            </>
          }
          body={'Me too'}
        />
      </div>
    </>
  )
}

export default Home
