import '../styles/App.css'
import { useParams, useSearchParams } from 'react-router-dom';


export function Pokemon() {
    const {Pokemon} = useParams();
    // let [searchParams] = useSearchParams();
  return (
    <>
      <div>
        Pokemon {Pokemon}
      </div>
    </>
  )
}

 export default Pokemon


