import '../styles/App.css'
import { useParams } from 'react-router-dom';


export function Planets() {
    const {Planets} = useParams();
  return (
    <>
      <div>
        Planet {Planets}
      </div>
    </>
  )
}

 export default Planets


