import React from 'react'
import { useRecoilValue } from 'recoil'
import { authAtom } from './recoil'

const Home = () => {

    const auth = useRecoilValue(authAtom);
    
    console.log(auth);
    
    if(!auth){
        return(
            <div>
            Please signin............
        </div>
        )
        
    }
  return (
    <div>
      You are signed in...........
    </div>
  )
}

export default Home
