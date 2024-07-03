import { useState } from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from "./pages/Landing"
import Game from "./pages/Game"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />}/>
          <Route path={"/game"} element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
