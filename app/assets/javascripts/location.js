$(document).ready(function() {
	// if (window.location.pathname != '/places/58') {
	// 	return;
	// }

	if (window.location.pathname.indexOf("/places", 0) == 0) {
		console.log("this url has places in it");

		var displayPosition = function(position) {
		var user_lat = position.coords.latitude;
		var user_lng = position.coords.longitude;

		var id = 58;
		var stitchURL = "/places/" + id + "/lookup";
		// AJAX gets location data from device and converts for use in ruby.
		$.ajax({
			// Step 1
			url: '/palces/58/lookup',
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

	// window.setInterval(userLocation, 2000);

	} else {
		console.log("this url does not have 'places' in it");
	};

});




	// Runs this javascipt only on the locations/index page. If not then returns nothing
	// if (window.location.pathname != '/locations/index') {
	// 	return;
	// }
	// finds user location with HTML5 geolocation.

	// updates location every second
	// locations();


// var compassDisplay = function(response) {
// 	var canvas = false;
// 	var ctx;
// 	var rose;
// 	var pre;
// 	var heading = 0;
// 	function init(e){
// 		pre = document.getElementsByTagName("pre")[0];
// 		canvas = document.getElementsByTagName("canvas")[0];
// 		ctx = canvas.getContext("2d");
// 		window.addEventListener("resize", onResize, false);
// 		window.addEventListener("orientationchange", onResize, false);
// 		if("DeviceOrientationEvent" in window){
// 			window.addEventListener("interfaceorientation", onInterfaceOrientation, false);
// 		}
// 		window.animate(onAnimFrame);
// 		rose = document.createElement("canvas");
// 		onResize();
// 	}

// 	function onResize(){
// 		canvas.width = canvas.clientWidth;
// 		canvas.height = canvas.clientHeight;
// 		rose.width = canvas.width;
// 		rose.height = canvas.height;
// 		drawRose(rose.getContext("2d"));
// 	}
// 	function onAnimFrame(delta){
// 		canvas.width = canvas.width;
// 		var orientation = window.orientation || 0;
// 		//pre.innerHTML = delta + "\n"+heading + "\n"+orientation;
// 		ctx.save();
// 		ctx.translate(canvas.width/2, canvas.height/2);
// 		ctx.rotate((heading - 90)*Math.PI/180);
// 		ctx.drawImage(rose, -rose.width/2, -rose.height/2);
// 		ctx.restore();
// 	}
// 	function onInterfaceOrientation(e){
// 		heading = e.alpha;
// 	}

// 	function drawRose(ctx, north){
// 		function polar(a, r){
// 			return [Math.cos(a/180*Math.PI)*r,
// 					Math.sin(a/180*Math.PI)*r];
// 		}
// 		function tip(angle, radius, arc, smallRadius, stroke, fill){
// 			ctx.lineWidth = 1;
// 			ctx.beginPath();
// 			ctx.moveTo.apply(ctx, polar(0, 0));
// 			ctx.lineTo.apply(ctx, polar(angle, radius));
// 			ctx.lineTo.apply(ctx, polar(angle+arc, smallRadius));
// 			ctx.lineTo.apply(ctx, polar(0, 0));
// 			ctx.strokeStyle = stroke;
// 			ctx.fillStyle = fill;
// 			ctx.stroke();
// 			ctx.fill();
// 		}
// 		function text(string, angle, radius, size, color){
// 			ctx.save();
// 			ctx.rotate(angle/180*Math.PI);
// 			ctx.textAlign = "center";
// 			ctx.textBaseline = "bottom";
// 			ctx.fillStyle = color;
// 			ctx.font = size+"px Times, serif";
// 			ctx.fillText(string, 0, -radius);
// 			ctx.restore();
// 		}


// 		ctx.canvas.width = ctx.canvas.width;
// 		north = north || screenX;
// 		var w = ctx.canvas.width;
// 		var h = ctx.canvas.height;
// 		var r = w < h ? w/3 : h/3;
// 		ctx.save();
// 		ctx.translate(w/2, h/2);
// 		ctx.rotate(north/180*Math.PI);

// 		for(var i=0; i<360; i+=90){
// 			tip(i+45, r*0.75, 45, r/10, "black", "white");
// 			tip(i+45, r*0.75, -45, r/10, "white", "black");
// 		}
// 		for(var i=0; i<360; i+=90){
// 			tip(i+22.5, r*0.5, 60, r/10, "black", "white");
// 			tip(i+22.5, r*0.5, -60, r/10, "white", "black");
// 		}
// 		for(var i=0; i<360; i+=90){
// 			tip(i+67.5, r*0.5, 60, r/10, "black", "white");
// 			tip(i+67.5, r*0.5, -60, r/10, "white", "black");
// 		}
// 		ctx.beginPath();
// 		ctx.lineWidth = 5;
// 		ctx.strokeStyle = "black";
// 		ctx.arc(0, 0, r*0.8, 0, Math.PI*2, true);
// 		ctx.stroke();
// 		for(var i=0; i<360; i+=90){
// 			tip(i, r, 45, r/5, "black", "white");
// 			tip(i, r, -45, r/5, "white", "black");

// 		}


// 		text("N", 0, r, r/4, "black");
// 		text("E", 90, r, r/4, "black");
// 		text("S", 180, r, r/4, "black");
// 		text("W", 270, r, r/4, "black");

// 		ctx.restore();
// 	}



// 	window.addEventListener("load", init, false);
// 	}

// 	compassDisplay();

// 		$('body').on("mousemove", function(event){
//     	// console.log(event.screenX/10, event.screenY/10);
//     	var screenX = event.screenX/10
//     	console.log(screenX);
//     	compassDisplay();
//   	});
