import React from 'react'

const Button = ({
    children,
    width = 'w-10', 
    height = 'h-8',
    buttonColor = 'bg-black',
    className

}) => {
  return (
    <div>
      <button className={`${width} ${height} ${buttonColor} ${className} p-2 text-white rounded-md`}>{children}</button>
    </div>
  )
}

export default Button
