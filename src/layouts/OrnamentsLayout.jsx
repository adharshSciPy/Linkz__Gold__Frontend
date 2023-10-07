import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, OrnamentsNavbar } from '../components'

const OrnamentsLayer = () => {
  return (
    <div className="ornaments_layout default">
      <Navbar />
      <OrnamentsNavbar />
      <Outlet />
    </div>
  )
}

export default OrnamentsLayer