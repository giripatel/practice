import React from 'react'

const Input = ({
    label,
    type='text',
    width = 'w-52',
    height = 'h-10',
    className,

}) => {
  return (
    <div>
      <h3 className={` font-semibold my-1`}>{label}</h3>
      <input className={`${className} ${width} ${height} border-solid  border-slate-700 border-2 rounded-md `} type={type} id={label} />
    </div>
  )
}

export default Input
