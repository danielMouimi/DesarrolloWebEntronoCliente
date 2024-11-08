window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  
  document.getElementById("Alfa").innerText = ("Alfa: " + alpha);
  document.getElementById("Beta").innerText = ("Beta: "+beta);
  document.getElementById("Gamma").innerText = ("Gamma: "+gamma);



if (window.DeviceMotionEvent) {
//documentacion para IOS
DeviceMotionEvent.requestPermisionEvent

}else {
  window.addEventListener("deviceorientation",handleOrientation);
}
}