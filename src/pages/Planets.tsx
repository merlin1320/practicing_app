import '../styles/App.css'
import { useParams } from 'react-router-dom';


export function Planets() {
    const {Planets} = useParams();
  return (
    <>
      <div>
        Planet {Planets} 
      </div>
      <div>
      <img className='images' src={`/Planets/${Planets}.jpg`}/>
      </div>
    </>
  )
}

 export default Planets


