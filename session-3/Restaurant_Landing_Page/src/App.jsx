import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavrBar from './components/NavrBar'
import BigText from './components/BigText'
import SmallText from './components/SmallText'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavrBar /> */}
      {/* <BigText> </BigText> */}
      <SmallText> Healthy switcher chefs do all the prep work, like 
peeding, chopping & marinating, so you can cook
a fresh food.</SmallText>
    </>
  )
}

export default App
