import Loader from '@root/lib/components/loader'
import { NavigationTitle } from '@root/site/navigation/navigation'
import Popover from '@root/lib/components/popover'

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
