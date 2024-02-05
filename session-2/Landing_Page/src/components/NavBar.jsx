import React from 'react'
import Button from './Button'
function NavBar() {
  return (
    <div className=''>
      <nav className='flex bg-inherit p-2'>
        <img className=' w-14' src="https://nyc3.digitaloceanspaces.com/fcw-static-new/app/uploads/2019/09/23152710/Asset-2-1.svg" alt="" />
        <div className='flex justify-center space-x-5 w-full m-auto  p-4'>
        <Button text={'Home'}/>
        <Button text={'About'}/>
        <Button text={'Contact'} /> 
        </div>
      </nav>
    </div>
  )
}

export default NavBar
