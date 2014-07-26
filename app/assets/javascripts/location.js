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
			console.log(response);
			$('#user_lat').text(response.coords.user_lat); // push data to user_lat id on page
			$('#user_lng').text(response.coords.user_lng); // push data to user_lng id on page
			$('#bearing').text(response.bearing);
			$('#distance').text(response.distance);
			$('#showDistance').text((response.distance).toFixed(2) + " km");
			$('#heading').text(response.compass);
			var date = new Date(response.timestamp);
			$('#timeStamp').text(date);
			userCompass.bearing = response.bearing;
			userCompass.distance = response.distance;
			userCompass.lat = response.coords.user_lat;
			userCompass.lng = response.coords.user_lng;

			console.log(userCompass.distance)
        var distanceNow = userCompass.distance;
        userCompass.distanceOrig = userCompass.distanceOrig || distanceNow;
        // $('#compassContainer').text('original distance: '+ userCompass.distanceOrig + ' distance now: '+ distanceNow)
        console.log('original distance', userCompass.distanceOrig, 'distance now', distanceNow, userCompass.distanceOrig != distanceNow);
        // Finding the range of colors in percentage for distance.
        if ((userCompass.distanceOrig != distanceNow) && (userCompass.distanceOrig > distanceNow)) {
          range = 3000 *(1 - (distanceNow/userCompass.distanceOrig));
        } else {
          range = 1;
        }

        console.log('range: '+ range);
        var compassGradient = '-webkit-gradient(radial, 50% 0 , 0, 50% 0,' + parseInt(range) +', from(#FF213D), to(#0E213D))';
        // $('#compass').css('background', compassGradient);
        console.log(compassGradient);
        $('#compass').css('background', compassGradient);
        $('#backgroundCompass').css('background', compassGradient);
        // $('#compass').css({'-webkit-background-clip': 'text'});
        // $('#compass').css({'-webkit-text-fill-color': 'transparent'});


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
	userCompass.userLocation = function() {
		// STEP 1 - DETECTING GEOLOCATION
		if (navigator.geolocation) {
			// var timeoutVal = 4500;
			navigator.geolocation.watchPosition(
				// if success
				displayPosition,
				// if error
				displayError

			  // { enableHighAccuracy: true }
			  );
		} else {
			alert("Geolocation is not supported by this browser");
			// PUSH THIS INTO THE PAGE!!!
		};
	};
});
