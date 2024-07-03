import React from 'react'

const Button = ({onClick, children} : {onClick : () => void, children : React.ReactNode}) => {
  return (
    <div>
        <button onClick={onClick} type="button" className="text-white bg-green-600 hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{children}</button>
    </div>
  )
}

export default Button
