import React from 'react'

const BigText = ({children}) => {
  return (
    <div>
      <h1 className='text-slate-700 text-7xl font-extrabold w-[693px]'>{children}</h1>
    </div>
  )
}

export default BigText
