import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import AppFooter from '../Footer/AppFooter'
export default function MasterLayout() {
  return (
    <div>
    <Navbar/>
    <div className="container">
    <Outlet/>
    </div>
     <AppFooter/>
     </div>
  )
}
