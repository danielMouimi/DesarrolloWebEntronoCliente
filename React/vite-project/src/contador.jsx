import { useState } from "react";
export function Contador() {
    var [num, setnum] = useState(0);

    function evento(){
      setnum(num+1);
    }  
    
    return (
      <>
      <button onClick={evento}>click me</button>
      <p>Button has been clicked: {num}</p>
      </>
    )
}