import React from 'react'
import Logo from '../assets/Logo.svg'
const NavrBar = () => {
  return (
    <div className='m-auto'>
      <nav className='flex  justify-between m-4 p-2'>
        <img src={Logo} alt="" />
        <div className='flex space-x-7 justify-start '>
        <h6 className='text-gray-700 text-sm mt-3'>Home</h6>
        <h6 className='text-gray-700 text-sm mt-3'>About</h6>
        <h6 className='text-gray-700 text-sm mt-3'>Testimonials</h6>
        <h6 className='text-gray-700 text-sm mt-3'>Contact</h6>
        <button className='bg-white rounded-3xl text-sm text-gray-700  p-3'>Booking Now</button>
        </div>
      </nav>
    </div>
  )
}

export default NavrBar
