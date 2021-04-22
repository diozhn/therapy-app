import React from 'react'
import Sidebar from './Navigation/Sidebar'
import Topbar from './Navigation/Topbar'

const Dashboard = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Topbar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
