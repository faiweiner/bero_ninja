// set up global object
var userCompass = userCompass || {};

$(document).ready(function() {
// checks which page you are on so this code only runs if user is on a compass page, finding a place or friend.
  if (window.location.pathname.indexOf("/places/", 0) == 0) {
    userCompass.runCompass;
  } else if (window.location.pathname.indexOf("/friends/", 0) == 0) {
    userCompass.runCompass;
  } else {
    return;
  };
  // creates compass function object
  userCompass.runCompass = function () {
    var compass = document.getElementById('compass');
    // if device has orientation support, run code
    if(window.DeviceOrientationEvent) { 
      // add event listener on orientation  
      window.addEventListener('deviceorientation', function(event) {
        var alpha;
          // check if iOS
          if(event.webkitCompassHeading !== undefined) {

            alpha = -(event.webkitCompassHeading) + userCompass.bearing
            
            // test code: 
            // $('#alpha').text(event.webkitCompassHeading);
            // $('#accuracy').text(event.webkitCompassAccuracy);
            // $('#alphaWithBearing').text(alpha);
            // $('#version').text(6);

            //Rotation is reversed for iOS
            compass.style.WebkitTransform = 'rotate(' + alpha  + 'deg)';
          }
          // non iOS
          else {
            alpha = event.alpha;
            webkitAlpha = alpha + userCompass.bearing;
            $('#webkitAlpha').text(webkitAlpha);
            if(!window.chrome) {
              //Assume (make an ass out of u and me) Android stock and apply offset
              webkitAlpha = alpha-270;
              $('#webkitAlpha').text(webkitAlpha);
            };
          };
          // handle transform for browsers
          compass.style.Transform = 'rotate(' + alpha + 'deg)';
          compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
          // rotation is reversed for FireFox
          compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';
          // return false if no orientation support detected
      }, false);
    };
  };
});

