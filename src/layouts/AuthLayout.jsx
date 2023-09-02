import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <section className='app_layout auth'>
      <Outlet />
    </section>
  )
}

export default AuthLayout