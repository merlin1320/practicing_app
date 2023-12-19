import { useEffect } from "react"




export function AutomatedIncrement() {

    useEffect(()=> {
        const interval = setInterval((e:number)=> {
            e+1;
        }, 1000)
    })
    return (
      <div>Pas</div>
    )
  }
  
   export default AutomatedIncrement