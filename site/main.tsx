import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, useRoutes } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import { routes } from './routes'
import './index.css'
import Container from './layout/container'
import Content from './layout/content'
import Header from './layout/header'
import Footer from './layout/footer'
import config from './config'

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
