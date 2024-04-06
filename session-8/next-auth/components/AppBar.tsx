"use client"

import {signIn, signOut, useSession} from 'next-auth/react'

export default function AppBar() {


  // useSession is used to get session details in client side components
  const session = useSession();
  return (
    <>
    <div className="h-20 w-full  opacity-45">
      <button className='bg-white text-black' onClick={() =>signIn()}>Signin</button>
      <button className='bg-white text-black' onClick={() => signOut()}>Sign out</button>
      <br /><br />
      {JSON.stringify(session)}
    </div>
    </>
  );
}
