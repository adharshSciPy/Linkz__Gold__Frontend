import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <Section className="app_layout default">
      <Outlet />
    </Section>
  )
}

export default DefaultLayout