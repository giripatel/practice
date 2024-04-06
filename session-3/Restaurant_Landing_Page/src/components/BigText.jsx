import React from 'react'

const BigText = ({children}) => {
  return (
    <div>
      <h1 className='text-slate-700 text-5xl font-extrabold w-[490px] '>{children}</h1>
    </div>
  )
}

export default BigText
