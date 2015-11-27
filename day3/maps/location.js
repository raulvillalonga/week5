if ("geolocation" in navigator) {
  var button = $('#where-am-i');
  button.on('click', getLocation);
} else {
  alert("Geolocation is not available")
}

function getLocation() {
  console.log('Getting location...');
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
}

var options = {
  enableHighAccuracy: true 
};

function onLocation (position) {
  displayMap(position.coords.latitude, position.coords.longitude);
}

function onError(error) {
  console.log("Getting location failed: " + error);
}

function displayMap(lat, lon) {
  var urlRoot = "https://maps.googleapis.com/maps/api/staticmap?markers=";
  var urlParams = "&zoom=17&size=800x500";
  var url = urlRoot + lat + "," + lon + urlParams;
  document.getElementById('map').src = url;
  console.log(url);
}