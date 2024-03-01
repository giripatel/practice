import React from 'react'

const Button = ({
    children,
    width = 'w-10', 
    height = 'h-8',
    buttonColor = 'bg-black',
    className

}) => {
  return (
    <div className='class="flex items-center justify-center'>
      <button className={` ${width} ${height} ${buttonColor} ${className} text-sm  w-36 py-2 text-white rounded-md`}>{children}</button>
    </div>
  )
}

export default Button
