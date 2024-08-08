import React from 'react'
import { TaskBar } from '../TaskBar'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

const MainLayout = () => {
  return (
    <div>
      <TaskBar/>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
