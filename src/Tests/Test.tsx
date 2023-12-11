import { useState } from "react"

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div>
      <input type="checkbox" id="checkbox" checked={isChecked} />
      <label htmlFor="checkbox">I agree to Terms of Service </label>
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  )
}

function Test() {
  return (
    <div className="Test">
      <Checkbox />
    </div>
  )
}

export default Test