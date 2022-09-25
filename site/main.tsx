import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, useRoutes } from 'react-router-dom'
import Container from '@root/layout/container'
import Content from '@root/layout/content'
import Footer from '@root/layout/footer'
import Header from '@root/layout/header'
import config from '@root/config'
import { Outlet } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  const element = useRoutes(routes)
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Container>
        <title>{config.appName}</title>
        <Content>
          <Header />
          {element}
          <Outlet />
        </Content>
        <Footer />
      </Container>
    </React.Suspense>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
