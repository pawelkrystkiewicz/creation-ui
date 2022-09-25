import Loader from '@components/loader'
import { NavigationTitle } from '@components/navigation/navigation'
import Popover from '@components/popover'

const Home = () => {
  const Body = () => <div>Hello World</div>
  const Trigger = () => <div>Click me!</div>
  return (
    <>
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
