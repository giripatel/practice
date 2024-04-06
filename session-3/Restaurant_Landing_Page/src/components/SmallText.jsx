import React from 'react'

const SmallText = ({children}) => {
  // text-slate-600 w-[360px]
  return (
    <div>
      <p className='text-slate-600 w-[490px] text-xl'>{children}</p>
    </div>
  )
}

export default SmallText
