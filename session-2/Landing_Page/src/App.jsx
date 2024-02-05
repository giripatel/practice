import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`bg-[url('./assets/images/img1.jpg')] h-screen bg-cover`}>

    <LandingPage/>
    </div>
  )
}

export default App
