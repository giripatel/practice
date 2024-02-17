import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import NavrBar from './components/NavrBar'
import BigText from './components/BigText'
import SmallText from './components/SmallText'
import Card from './components/Card'
import {chooseImage,johnImage} from './assets/index'
import HomePage from './pages/HomePage'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* <NavrBar /> */}
      {/* <BigText> </BigText> */}
      {/* <SmallText> </SmallText> */}
      {/* <Card image={johnImage} heading={cardHeading} description={description}/> */}
      <HomePage/>
    </>
  )
}

export default App
