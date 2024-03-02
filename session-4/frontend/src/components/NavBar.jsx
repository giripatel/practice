import React from 'react'

const NavBar = ({
    userName,
}) => {
  return (
    <div>
      <nav className=''>
        
        <div>
            <h3 className=''>Quick Pay</h3>
        </div>
        <div>
            <h3>{userName}</h3>
            <div className='w-10 rounded-full'>{}</div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
