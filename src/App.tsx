import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
      const handleClick = () => {
        setCount(count + 1)
      }
  return (
    <>
      <div>
      </div>
      <h1>Kafka calc</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
