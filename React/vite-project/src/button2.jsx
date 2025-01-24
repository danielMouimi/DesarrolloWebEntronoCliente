import { useState } from "react";
export function Button2({content}) {

    var [cont,setcont] = useState(content);

    function showAlert() {
     alert(cont);
    }
 
     return (
         <>
         <button onClick={showAlert}>{cont}</button>
         </>
     )
 }
 