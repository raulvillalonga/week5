// ruby -run -ehttpd . -p8000

function onLocation(position){
  console.log('tu latitud es ' + position.coords.latitude);
  console.log('tu logitud es ' + position.coords.longitude);
  document.getElementById('posicion').innerHTML = 'Lat: ' +
  position.coords.latitude + ', lon:' + position.coords.longitude
}

function onError(error){
  console.error(error);
}

var options = {
  enableHighAcuracy: true
};


navigator.geolocation.watchPosition(onLocation, onError, options);

//navigator.geolocation.clearWatch(watchId);
//navigator.geolocation.getCurrentPosition(onLocation, onError, options);