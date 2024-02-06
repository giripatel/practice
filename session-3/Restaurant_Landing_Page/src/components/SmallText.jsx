import React from 'react'

const SmallText = ({children}) => {
  return (
    <div>
      <p className='text-slate-600 w-[360px]'>{children}</p>
    </div>
  )
}

export default SmallText
