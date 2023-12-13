import '../styles/App.css'
import { useParams } from 'react-router-dom';


export function Books() {
    const {Books} = useParams();
  return (
    <>
      <div>
        Book Series 
        <p>{Books}</p>
      </div>
    </>
  )
}

 export default Books


