export function Lista2({listaNombres}){
    
    
    var lista = listaNombres.map(nombre => 
      <div key={nombre}className="componentlist">
        {nombre}
      </div>

    );
    return (
      <>
      {lista}
 
      </>
    );
}