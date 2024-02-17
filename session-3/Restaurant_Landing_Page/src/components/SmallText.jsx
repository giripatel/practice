import React from 'react'

const SmallText = ({children}) => {
  // text-slate-600 w-[360px]
  return (
    <div>
      <p className='text-slate-600 w-[693px] text-3xl'>{children}</p>
    </div>
  )
}

export default SmallText
