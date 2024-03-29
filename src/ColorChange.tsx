import { useContext, useState } from "react";
import BackgroundColorContext from "./context/BackgroundColorContext";

const colors = ['Red','Blue','Green','Black','White', 'Purple']


export function ColorChange(props : any){
    const [show, setShow] = useState(true);
    const {updateBackgroundColor} = useContext(BackgroundColorContext)
    return (
        <div className='colorchange'>
          <div>
            <input type='checkbox' id='LinkListID' checked={show} onChange={()=>{setShow(!show)}}/>
            <label htmlFor="checkbox"> Change the background color </label>
          </div>
          { show && <div className="linkslist">
              <div>
              <div>
                <select onChange={(e) => {updateBackgroundColor(e.target.value)}}>
                  <option >Color Selection</option>
                  <option value='#242424' selected={props.color==='#242424'}>Default</option>
                  {colors.map((name) => {return (<option value={name} key={name} selected={name===props.color}>{name}</option>)})}
                </select>
              </div>
              <div>
                <label>Enter your own color here: </label>
                <input value={props.color} onChange={(e)=>{updateBackgroundColor(e.target.value.toLowerCase())}} id='colortext' type='text'/>
              </div>
            </div>
          </div> }
        </div>
    )
}