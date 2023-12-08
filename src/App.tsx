import './App.css'
import Loki from './assets/Loki.jpg'
import {Birthday} from './Birthday'

function App() {


  return (
    <>
      <div>
        <h1>
          Relearning to code
        </h1>
          <p>
            I am learning how to code again after a 10 year haitus. I am <Birthday birthdate="1992-01-09"/> years old. 
            {/* Vinny is <Birthday birthdate='1991-01-23'/> years old */}
          </p>
          <p >
            <img src={Loki} className='loki-photo' alt='Loki'/>
          </p>
          <p className='text-talk'>
            This is my old cat Loki. He was a great cat even though he liked to play around. 
          </p>
          <p>
            I have no clue what I am doing
          </p>
          <p>
             <a href="https://github.com/merlin1320/practicing_app" target='_blank'>Here is the code I am working on</a>
          </p>
      </div>
    </>
  )
}

export default App
