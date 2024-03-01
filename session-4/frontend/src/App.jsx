import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center'>
        {/* <Signup></Signup> */}
        <SignIn></SignIn>
      </div>
    </>
  )
}

export default App
