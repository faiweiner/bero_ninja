// if (navigator.geolocation) {
// 	var user_location = navigator.geolocation.watchPosition(
// 		displayPosition, 
//     displayError
//     );
// };



var locations = function() {
	
if (navigator.geolocation) {
  var timeoutVal = 4500;
  navigator.geolocation.getCurrentPosition(
    displayPosition, 
    displayError
    // { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
  );
}
else {
  alert("Geolocation is not supported by this browser");
}

function displayPosition(position) {
  console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
};

function displayError(error) {
  var errors = { 
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
};
};


window.setInterval(locations, 5000);

// function yourfunction() { alert('test'); }