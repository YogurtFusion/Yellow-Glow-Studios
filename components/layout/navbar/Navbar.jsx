import React from 'react'
import Topnav from './TopNav'
import Sidebar from './SideBar'


const Navbar = () => {
  return (
    <div>
        <div className="hidden lg:block">

        <Topnav/>
        </div>
        <div className="lg:hidden">
            <Sidebar/>
        </div>

    </div>

  )
}

export default Navbar