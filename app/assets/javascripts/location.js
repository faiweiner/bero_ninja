// set up global object
var userCompass = userCompass || {};

$(document).ready(function() {
	var pathArray = window.location.pathname.split( '/' );
	var pathId = pathArray[2];

		if (window.location.pathname.indexOf("/places/", 0) == 0) {
			var stitchURL = "/places/" + pathId + "/lookup";
		} else if (window.location.pathname.indexOf("/friends/", 0) == 0) {
			var stitchURL = "/friends/" + pathId + "/lookup";
		};

		if (window.location.pathname.indexOf("/places/", 0) == 0) {
			userCompass.userLocation;
		} else if (window.location.pathname.indexOf("/friends/", 0) == 0) {
			userCompass.userLocation;
		} else {
			return;
		};

	var displayPosition = function(position) {
		var user_lat = position.coords.latitude;
		var user_lng = position.coords.longitude;
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
			// console.log(response);
			// optional display data:
			// $('#user_lat').text(response.coords.user_lat); 
			// $('#user_lng').text(response.coords.user_lng); 
			// $('#heading').text(response.compass);
			// $('#bearing').text(response.bearing);
			// $('#distance').text(response.distance);
			// display distance to destination
			$('#showDistance').text((response.distance).toFixed(2) + " km");
			// display user last seen timestamp
			var date = new Date(response.timestamp);
			$('#timeStamp').text(date.toString());
			// feed compass the coordinates, bearing and distance data
			userCompass.bearing = response.bearing;
			userCompass.distance = response.distance;
			userCompass.lat = response.coords.user_lat;
			userCompass.lng = response.coords.user_lng;

        var distanceNow = userCompass.distance;
        userCompass.distanceOrig = userCompass.distanceOrig || distanceNow;
        // option to show original distance and current distance: 
        // $('#compassContainer').text('original distance: '+ userCompass.distanceOrig + ' distance now: '+ distanceNow)
        // console.log('original distance', userCompass.distanceOrig, 'distance now', distanceNow, userCompass.distanceOrig != distanceNow);

        // Finding the range of colors in percentage for distance.
        if ((userCompass.distanceOrig != distanceNow) && (userCompass.distanceOrig > distanceNow)) {
          range = 3000 *(1 - (distanceNow/userCompass.distanceOrig));
        } else {
          range = 1;
        }
        // apply changing color gradient to compass arrow and page background
        var compassGradient = '-webkit-gradient(radial, 50% 0 , 0, 50% 0,' + parseInt(range) +', from(#FF213D), to(#0E213D))';
        $('#compass').css('background', compassGradient);
        $('#backgroundCompass').css('background', compassGradient);
				}
			});
		};

	// error message displayed if location fails
	var displayError = function(error) {
		var errors = {
			1: 'Permission denied',
			2: 'Position unavailable',
			3: 'Request timeout'
		};
		alert("Error: " + errors[error.code]);
	};

	var options = { enableHighAccuracy: true }

	// checks if geolocation enabled
	userCompass.userLocation = function() {
		// dectect geolaction support
		if (navigator.geolocation) {
			// postion updated with watchPosition - auto updates on location change over polling getCurrentPosition
			navigator.geolocation.watchPosition(
				// if success
				displayPosition,
				// if error
				displayError,

			  options
			  );
		} else {
			alert("Geolocation is not supported by this browser");
		};
	};
});
