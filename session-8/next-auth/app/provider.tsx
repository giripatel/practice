"use client"

import { SessionProvider, useSession } from 'next-auth/react'
import React from 'react'

const Providers = ( {children} : {children : React.ReactNode}) => {

  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}

export default Providers
