import React from 'react'
import { Outlet } from 'react-router'
import AdminHeader from './header/AdminHeader'
import AdminFooter from './footer/AdminFooter'
import Dashboard from './dashboard/Dashboard'

const AdminRoot = () => {
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
      <Dashboard/>
      <AdminFooter/>
    </div>
  )
}

export default AdminRoot
