import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`bg-[url('./images/1.png')] bg-cover h-screen`}>
      <div>
        <Homepage/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App
