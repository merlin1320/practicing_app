import '../styles/App.css'
import { useParams } from 'react-router-dom';


export function Books() {
    let {Books} = useParams();
  return (
    <>
      <div>
        Book Series 
        {/* {JSON.stringify(p, null, 1)} */}
        <p>{Books}</p>
      </div>
    </>
  )
}

 export default Books


