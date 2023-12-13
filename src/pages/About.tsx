import '../styles/App.css'
import Loki from '../assets/Loki.jpg'
import {Birthday} from '../Birthday'

export function About() {

  return (
    <>
      <div className='heading'>
        <h1>
          Relearning to code
        </h1>
      </div>
      <div>
          <p>
            I am learning how to code again after a 10 year haitus. I am <Birthday birthdate="1992-01-09"/> years old. 
          </p>
      </div>
      <div>
          <p >
            <img src={Loki} className='loki-photo' alt='Loki'/>
          </p>
          <p className='text-talk'>
            This is my old cat Loki. He was a great cat even though he liked to play around. 
          </p>
      </div>
      <div>
          <p>
            I have no clue what I am doing. Someone save me. 
          </p>
          <p>
             <a href="https://github.com/merlin1320/practicing_app" target='_blank'>Here is the code I am working on</a>
          </p>
      </div>
    </>
  )
}

 export default About


