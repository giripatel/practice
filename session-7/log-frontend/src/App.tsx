import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RecoilRoot} from 'recoil'
import './App.css'
import { Route, RouterProvider,BrowserRouter, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <BrowserRouter> 
      <RecoilRoot>
        <Routes>
          <Route path={'/signin'} element={<SignIn/>} ></Route>
          <Route path={'/home'} element={<Home/>} ></Route>
        </Routes>
        </RecoilRoot>
      </BrowserRouter>

    </div>
  )
}

export default App
