var userCompass = userCompass || {};

$(document).ready(function() {

  if (window.location.pathname.indexOf("/places/", 0) == 0) {
    userCompass.runCompass;
  } else if (window.location.pathname.indexOf("/friends/", 0) == 0) {
    userCompass.runCompass;
  } else {
    return;
  };

  userCompass.runCompass = function () {
    var compass = document.getElementById('compass');
    if(window.DeviceOrientationEvent) {

      window.addEventListener('deviceorientation', function(event) {
        var alpha;
                //Check for iOS property

                if(event.webkitCompassHeading !== undefined) {

                  alpha = -(event.webkitCompassHeading) + userCompass.bearing
                  // alpha = Math.abs(alpha);
                  $('#alpha').text(event.webkitCompassHeading);
                  $('#accuracy').text(event.webkitCompassAccuracy);
                  $('#alphaWithBearing').text(alpha);
                  $('#version').text(6);
                  //Rotation is reversed for iOS
                  compass.style.WebkitTransform = 'rotate(' + alpha  + 'deg)';
                }
                //non iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha + userCompass.bearing;
                  $('#webkitAlpha').text(webkitAlpha);
                  if(!window.chrome) {
                    //Assume (make an ass out of u and me) Android stock and apply offset
                    webkitAlpha = alpha-270;
                    $('#webkitAlpha').text(webkitAlpha);

                  }
                }

                compass.style.Transform = 'rotate(' + alpha + 'deg)';
                compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //Rotation is reversed for FF
                compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';



              }, false);
    }
  }
});

