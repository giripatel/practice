
import React from 'react'
import NavBar from '../components/NavBar'

function LandingPage() {
  return (
    <div >
      <NavBar />
      <div className='flex'>
        <div className='w-1/2 pl-6'>
          <h1 className='text-[150px] bg-inherit'>This is test text</h1>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
