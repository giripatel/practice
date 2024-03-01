import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center'>
        <Signup></Signup>
      </div>
    </>
  )
}

export default App
