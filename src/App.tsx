import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loki from './assets/Loki.jpg'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div>
        <h1>
          Relearning to code
        </h1>
          <p>
            I am learning how to code again after a 10 year haitus. 
          </p>
          <p >
            <img src={Loki} className='loki-photo' alt='Loki'/>
          </p>
          <p>
            I have no clue what I am doing
          </p>
      </div>
    </>
  )
}

export default App
