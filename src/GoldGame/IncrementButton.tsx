

type IncrementButtonProps ={
    incrementamount: Number,
    currencytype: string    
}

export function IncrementButton(IncrementButtonProps: any) {

    return (
        <div>
            <button>Increase {IncrementButtonProps.currencytype} by {IncrementButtonProps.incrementamount}</button>
        </div>
    )
  }
  
   export default IncrementButton