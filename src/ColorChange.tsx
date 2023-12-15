import { useState } from "react";

const colors = ['Red','Blue','Green','Black','White', 'Purple']


export function ColorChange(props : any){
    const [show, setShow] = useState(true);

    return (
        <div className='colorchange'>
          <p>
            <input type='checkbox' id='LinkListID' checked={show} onChange={()=>{setShow(!show)}}/>
            <label htmlFor="checkbox"> Change the background color </label>
          </p>
          { show && <div className="linkslist">
              <div>
              <div>
                <select onChange={(e) => {props.setColor(e.target.value)}}>
                  <option >Color Selection</option>
                  <option value='#242424' selected={props.color==='#242424'}>Default</option>
                  {colors.map((name) => {return (<option value={name} key={name} selected={name===props.color}>{name}</option>)})}
                </select>
              </div>
              <div>
                <p>Enter your own color here: </p>
                <input value={props.color} onChange={(e)=>{props.setColor(e.target.value.toLowerCase())}} id='colortext' type='text'/>
              </div>
            </div>
          </div> }
        </div>
    )
}