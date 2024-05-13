import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0) 

let count_in =()=>{
  if(count < 20)
  {
   setCount(count+1)
  }
}
const count_de = ()=>{
  if(count > 0)
  {
   setCount(count-1)
  }
}

  return (
    <>
     <h1>react counter</h1>
     <h2>count :{count}</h2>
     <button onClick={count_in}>increase count</button>
     <br></br>
     <button onClick={count_de}>decrease count</button>
    </>
  )
}

export default App
