import axios from 'axios';
import React, { useState } from 'react'
import { authAtom } from './recoil';
import { useRecoilState, useSetRecoilState } from 'recoil';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [auth,setAuth] = useRecoilState(authAtom);

  return (
    <div>
      <div>
        <input onChange={(e) => {
            setEmail(e.target.value)
        }} type="text" />
        <input onChange={(e) => {
            setPassword(e.target.value)
        }} type="text" />
        <button onClick={async () => {
            const response = await axios.post("http://localhost:3000/signin",{
                email : email,
                password : password
            })
          const auth = response.data.message;
          console.log(auth);
                setAuth(true)
            console.log("This is auth status" , auth);
            
        }}>Sign In</button>
      </div>
    </div>
  )
}

export default SignIn
