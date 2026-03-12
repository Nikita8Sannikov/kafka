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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
