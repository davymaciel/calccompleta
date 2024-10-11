import { useState } from 'react'
import IMC from "./components/Calc"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <IMC/>
  </div>
  )
}

export default App