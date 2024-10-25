
function localizacion(pos) {

    var map = L.map("map").setView([pos.coords.latitude, pos.coords.longitude], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
}


navigator.geolocation.getCurrentPosition(localizacion);
