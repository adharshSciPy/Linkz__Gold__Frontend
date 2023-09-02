import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

const DefaultLayout = () => {
  return (
    <div className="app_layout default">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default DefaultLayout