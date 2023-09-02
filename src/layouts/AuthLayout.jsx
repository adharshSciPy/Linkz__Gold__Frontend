import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='app_layout auth'>
      <Outlet />
    </div>
  )
}

export default AuthLayout