import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        {/* Dùng để xác định vị trí hiển thị  */}
        <Outlet/>
    </div>
  )
}

export default About