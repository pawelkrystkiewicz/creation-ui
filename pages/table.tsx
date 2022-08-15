import { NavigationTitle } from '@components/navigation/navigation'
import Table from '@components/table/table'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <NavigationTitle />
      <div>
        <Table />
      </div>
    </>
  )
}

export default Home
