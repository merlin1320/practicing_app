import "./styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import {LinkList} from './LinkList' 
import { useState } from 'react'; 


  
  export function NavBar() {
    const [show, setShow] = useState(true);

    return (
      <div >

        <div className="links">
          <Link to='Home'>Home</Link>
          <Link to='About'>About</Link>

        </div>
        <div className="navbar-container">
          <p>
            <input type='checkbox' id='LinkListID' checked={show} onChange={()=>{setShow(!show)}}/>
            Show other links
          </p>
          { show && <div className="linkslist">
            <LinkList/>
          </div> }
        </div>
    </div>
  )
}

export default NavBar
