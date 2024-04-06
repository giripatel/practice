import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Input} from "./components/Input";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input label="test" className="bg-red-200" type="text" width="w-25" height="h-10" />
    </>
  );
}

export default App;
