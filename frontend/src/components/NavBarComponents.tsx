import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NavBarComponents = () => {
  return (
    <div>
      <div className='bg-slate-500 h-[75px] px-32 flex items-center justify-between'>

        {/* <div className='text-4xl text-white'>
          
        </div> */}

        <div className=''>
          <ul className='flex gap-10 text-xl text-white'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Job Form</Link></li>
          </ul>
        </div>

      </div>
      <Outlet />
    
    </div>
  )
}
