import { useState } from 'react'
import Student from './components/Student'
import './App.css'
import Addstudent from './components/Addstudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><Addstudent/></div>
       
    </>
  )
}

export default App
