// import { IncrementContext } from "./Context/IncrementContext";
import { useState } from "react";
import IncrementButton from "./IncrementButton"




export function Game() {
  let currencytype = 'Gold';
  let currencystart = 1;
  // function Incrementing(){
  //   let incrementated = currencystart
  //   incrementated++
  //   return(incrementated)
  // }
  const [count, setCount] = useState(1)

  

    return (
        <div>
          {/* <IncrementButton incrementamount={1} currencytype = {currencytype}/>
          <IncrementButton incrementamount={5} currencytype = {currencytype}/>
          <IncrementButton incrementamount={10} currencytype = {currencytype}/> */}
          <p>{currencytype} count is {count}</p>
          <button onClick={()=>setCount((count)=> count+1)}>Increase {currencytype} by 1</button>
          <button onClick={()=>setCount((count)=> count+5)}>Increase {currencytype} by 5</button>
          <button onClick={()=>setCount((count)=> count+10)}>Increase {currencytype} by 10</button>
        </div>
    )
  }
  
   export default Game