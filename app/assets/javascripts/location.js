$(document).ready(function() {

	if (navigator.geolocation) {
	  var timeoutVal = 4500;
	  navigator.geolocation.getCurrentPosition(
	    displayPosition, 
	    displayError
	    // { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
	  );
	}	else {
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
window.setInterval(locations, 5000);
});

// AJAX BASIC GUIDE FROM JOEL
// $.ajax({
//   url: '/location',
//   method: 'get',
//   dataType: 'json',
//   data: {
//     originlatitude: something.lat,
//     originlongitude: something.long,
//     destinationlatitude: someother.lat,
//     destinationlongitude: someother.long
//   },
//   success: function (response) {
//     console.log(response.bearing); // update the page with the response somehow
//   }
// });

// # routes
// get '/location' => 'locations#lookup'

// # locations_controller.rb
// def lookup
//   olat = params[originlatitude]
//   olong = params[originlongitude]
//   // etc