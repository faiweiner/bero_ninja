$(document).ready(function () {

	// Runs this javascipt only on the locations/index page. If not then returns nothing
	if (window.location.pathname != '/locations/index') {
		return;
	}
	// finds user location with HTML5 geolocation.
	var locations = function() {

		// checks if geolocation enabled
		if (navigator.geolocation) {
		  // var timeoutVal = 4500;
		  navigator.geolocation.getCurrentPosition(
		    displayPosition,
		    displayError
		    // { enableHighAccuracy: true, maximumAge: 0 }
		  );
		}	else {
		  alert("Geolocation is not supported by this browser");
		}

		function displayPosition(position) {
			var user_lat = position.coords.latitude;
			var user_lng = position.coords.longitude;

		  // console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
			// AJAX gets location data from device and converts for use in ruby.
				$.ajax({
					url: '/locations',
					type: 'GET',
					dataType: 'JSON',
					data: {
						user_lat: user_lat,
						user_lng: user_lng
					},
					success: function(response) {
						console.log(response);
						$('#user_lat').text(response.coords.user_lat); // push data to user_lat id on page
						$('#user_lng').text(response.coords.user_lng); // push data to user_lng id on page
						$('#bearing').text(response.bearing);
						$('#distance').text(response.distance);
						$('#heading').text(response.compass);
					}
				});
		};

		// Error message disapayed
		function displayError(error) {
		  var errors = {
		    1: 'Permission denied',
		    2: 'Position unavailable',
		    3: 'Request timeout'
		  };
		  console.log("Error: " + errors[error.code]);
		};
	};
		// updates location every second
		window.setInterval(locations, 5000);
		// locations();

});
