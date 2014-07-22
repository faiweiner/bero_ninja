var compass = {};


$(document).ready(function() {

	if (window.location.pathname == '/places/new') {
		return;
	}

	if (window.location.pathname.indexOf("/places/", 0) == 0) {
		console.log("this url has places in it");

		var displayPosition = function(position) {
		var user_lat = position.coords.latitude;
		var user_lng = position.coords.longitude;

		var pathArray = window.location.pathname.split( '/' );
		var pathId = pathArray[2];

		var stitchURL = "/places/" + pathId + "/lookup";
		// AJAX gets location data from device and converts for use in ruby.
		$.ajax({
			// Step 1
			url: stitchURL,
			type: 'GET',
			dataType: 'JSON',
			data: {
				user_lat: user_lat,
				user_lng: user_lng
			},
			// Step 2
			success: function(response) {
				console.log(response);
				$('#user_lat').text(response.coords.user_lat); // push data to user_lat id on page
				$('#user_lng').text(response.coords.user_lng); // push data to user_lng id on page
				$('#bearing').text(response.bearing);
				$('#distance').text(response.distance);
				$('#heading').text(response.compass);
				compass.bearing = response.bearing;
				compass.distance = response.distance;

			}
		});
	};

	// Error message disapayed
	var displayError = function(error) {
	  var errors = {
	    1: 'Permission denied',
	    2: 'Position unavailable',
	    3: 'Request timeout'
	  };
	  console.log("Error: " + errors[error.code]);
	  var errorMessage = "Error: " + errors[error.code];
	};

	// checks if geolocation enabled
	var userLocation = function() {
		// STEP 1 - DETECTING GEOLOCATION
		if (navigator.geolocation) {
			// var timeoutVal = 4500;
			navigator.geolocation.getCurrentPosition(
				// if success
				displayPosition,
				// if error
			  displayError
			   // options { enableHighAccuracy: true, maximumAge: 0 }
			);
		} else {
			alert("Geolocation is not supported by this browser");
			// PUSH THIS INTO THE PAGE!!!
		};
	};

	window.setInterval(userLocation, 2000);

	} else {
		console.log("this url does not have 'places' in it");
	};

});
