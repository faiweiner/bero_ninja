var hardwareDetection = function() {
  if (navigator.geolocation) {
    var message = "Geolocation detected - you're ready to Bero!"
    $('#hardware-error').addClass("alert alert-success");
    $('#hardware-error').text(message);
  } else {
    var message = "Geolocation not available - please use another geolocation-enabled device."
    $('#hardware-error').addClass("alert alert-danger");
    // $('#find-places').prop('disabled', true);
    // $('#find-friends').prop('disabled', true);
    $('#find-places').addClass("disabled");
    $('#find-friends').addClass("disabled");
    $('#hardware-error').text(message);
  };
};