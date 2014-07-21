var hardwareDetection = function() {
  if (navigator.geolocation) {
    var message = "Geolocation detected - you're ready to Bero!"
    $('#hardware-error').addClass("alert alert-success");
    $('#hardware-error').text(message);
    // The following code hides/shows elements depending on the size
    if ($('#desktopTest').is(':hidden')) {
      console.log("mobile + tablet"); 
    } else {
      console.log("desktop"); 
      $('#find-places').hide();
      $('#find-friends').hide();
    };
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