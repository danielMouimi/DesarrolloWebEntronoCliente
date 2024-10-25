    var anterior;
    var actual;
    var distancia = 0;




function localiza(pos) {
    anterior = actual;
    actual = pos;

    let Ndis = getDistanceBetweenPoints(anterior,actual);
    distancia += Ndis;
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}



function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'meters') {
    let theta = longitude1 - longitude2;
    let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
        Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) + 
        Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    if (unit == 'miles') {
        return Math.round(distance, 2);
    } else if (unit == 'kilometers') {
        return Math.round(distance * 1.609344, 2);
    } else if (unit == 'meters') {
        return Math.round(distance * 1.609344 * 1000, 2); // Multiplica por 1000 para convertir a metros
      }
}

    


function Ferror(error) {
console.log("se ha producido un error");
console.log("error numero: "+error.code);
console.log(error.message);
}

if (navigator.geolocation) {
    //soporta
    document.write("podemos trabajar con geolocalizacion");

    //navigator.geolocation.getCurrentLocation(localiza,Ferror);
    navigator.geolocation.watchPosition(localiza,Ferror);
    
    //document.write("la distancia recorrida es: " +  getDistanceBetweenPoints(lat1, lon1,navigator.geolocation.watchPosition(latitud,Ferror),navigator.geolocation.watchPosition(longitud,Ferror)));

    document.write("la distancia recorrida es: "+ distancia);
 
 
    //distancia recorrida
   

}else {
    //no soporta

    document.write("Necesitamos un navegador mas moderno");
}


