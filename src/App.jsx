import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-900">
        <h1 className="text-5xl font-bold text-white">
          E-Commerce Store
        </h1>
      </div>
    </>
  )
}

export default App
