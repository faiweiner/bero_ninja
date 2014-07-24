var userCompass = userCompass || {};

$(document).ready(function() {

  if (window.location.pathname == '/places/new') {
    return;
  }

  if (window.location.pathname.indexOf("/places/", 0) == 0) {


    userCompass.runCompass = function () {
        var compass = document.getElementById('compass');
        if(window.DeviceOrientationEvent) {

          window.addEventListener('deviceorientation', function(event) {
                var alpha;

                // var log = (new Date()) + " userCompass webKitCompassHeading: " + event.webkitCompassHeading;
                // $('.log').prepend('<p>' + log + '</p>');

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
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
                    $('#webkitAlpha').text(webkitAlpha);

                  }
                }

                compass.style.Transform = 'rotate(' + alpha + 'deg)';
                compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //Rotation is reversed for FF
                compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';

                var distanceNow = parseInt(userCompass.distance);
                // Finding the range of colors in percentage for distance.
                // range = 3000(1- (distanceNow/distanceOrig));
                dist = (4000/dist);
                var compassGradient = '-webkit-gradient(radial, 50% 0 , 0, 50% 0,' + dist +', from(#FF213D), to(#0E213D))';
                $('#compass').css('background', compassGradient);
                console.log(compassGradient);

                // var compassGradient = '-webkit-gradient(radial, 50% 0 , 0, 50% 0,' + dist +', from(#FF213D), to(#0E213D))';
                // $('#compass').css('background', compassGradient);
                // $('#compass').css({'-webkit-background-clip': 'text'});
                // $('#compass').css({'-webkit-text-fill-color': transparent});

              }, false);
        }
      }

    // window.setTimeout(init, 1500);
    // init();
  }
});
