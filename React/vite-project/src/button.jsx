export function Button() {

   function showAlert() {
    alert("clicked");
   }

    return (
        <>
        <button onClick={showAlert}>Actividad 2</button>
        </>
    )
}
