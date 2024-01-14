import { useState } from 'react'
import './App.css'

function App() {
  const [arrays, setArrays] = useState([{
    name: "Giridhar",
    age: '23',
    class:'middle'
  }])
  const [item,setItem] = useState({
    name: '',
    age: '',
    class : ''
  });

  const handleInput = (evnet) => {
    console.log(item)
    setArrays(prev => [...prev,item])
    setItem({
      name : '',
      age : '',
      class : ''
    })
  }
  return (
    <>
    {arrays.map((array,index) => (
      <div key={index} style={{flex:'inline-block'}}>
        <h2>{array.name}</h2>
        <h3>{array.age}</h3>
        <h3>{array.class}</h3>
        </div>
    ))}
      <input type="text"  value={item.name} onChange={(e) => setItem((prev) => ({...prev,name : e.target.value}))}/>
      <input type="text"  value={item.age} onChange={(e) => setItem((prev) => ({...prev,age : e.target.value}))}/>
      <input type="text"  value={item.class} onChange={(e) => setItem((prev) => ({...prev,class : e.target.value}))}/>
      <button  onClick={handleInput}>Add to array</button>
    </>
  )
}

export default App
