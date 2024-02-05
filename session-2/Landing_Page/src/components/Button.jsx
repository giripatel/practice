
import React from 'react'

function Button({
    text
}) {
  return (
    <div>
      <button className={`bg-inherit`}>{text}</button>
    </div>
  )
}

export default Button
