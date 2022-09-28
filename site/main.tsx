import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, useRoutes } from 'react-router-dom'
import Container from '@root/site/layout/container'
import Content from '@root/site/layout/content'
import Footer from '@root/site/layout/footer'
import Header from '@root/site/layout/header'
import config from '@root/config'
import { Outlet } from 'react-router-dom'
import { routes } from './routes'
import './index.css'

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
