import '../styles/App.css'
import { useParams } from 'react-router-dom';


export function Pokemon() {
    const {Pokemon} = useParams();
  return (
    <>
      <div>
        Pokemon {Pokemon}
      </div>
    </>
  )
}

 export default Pokemon


