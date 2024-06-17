import React from 'react'
import { TaskBar } from '../TaskBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <TaskBar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
