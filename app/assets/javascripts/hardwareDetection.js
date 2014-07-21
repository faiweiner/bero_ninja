var screenDetect = function() {
	// detects the size of the screen and, if applicable, disables/enables approriate elements within the page
	if ($('#desktopTest').is(':hidden')) {
		return "mobile";
	} else {
		return "desktop";
	};
};

var screenDetectByOrientation = function() {
	if Modernizr.hasEvent('DeviceOrientation') { 		
		return "mobile";
	} else { 		
		return "desktop"; 	
	};
};

// Hide element if on Desktop
var elementForMobile = function(element) {
	var screenType = screenDetect();
	if (screenType === "desktop") { 
		$(element).hide(); 
	} else if (screenType === "mobile") {
		$(element).show();
	};
};

var elementForDesktop = function(element) {
	var screenType = screenDetect();
	if (screenType === "desktop") { 
		$(element).show(); 
	} else if (screenType === "mobile") {
		$(element).hide();
	};
};

var elementAppendText = function(element, newClass, message) {
	$(element).addClass(newClass);
	$(element).text(message);
};

var hardwareDetection = function() {
	if (navigator.geolocation) {
		elementAppendText("#hardware-error", "alert alert-success", "Geolocation detected - you\'re ready to Bero!");
	} else {
		elementAppendText("#hardware-error", "alert alert-danger", "Geolocation not available - please use another geolocation-enabled device.");
		// The following code hides elements (features) when hardware is incompatible
		elementAppendText("#find-places", "disabled", null);
		elementAppendText("#find-friends", "disabled", null);
	};
};