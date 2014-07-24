var friendsCompass = friendsCompass || {};

$(document).ready(function() {

  if (window.location.pathname == '/places/new') {
    return;
  }

  if (window.location.pathname.indexOf("/friends/", 0) == 0) {


    friendsCompass.runCompass = function () {
        var compass = document.getElementById('compass');
        if(window.DeviceOrientationEvent) {

          window.addEventListener('deviceorientation', function(event) {
                var alpha;

                // var log = (new Date()) + " friendsCompass webKitCompassHeading: " + event.webkitCompassHeading;
                // $('.log').prepend('<p>' + log + '</p>');

                //Check for iOS property
                if(event.webkitCompassHeading !== undefined) {
                  
                  alpha = -(event.webkitCompassHeading) + friendsCompass.bearing
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
                  webkitAlpha = alpha + friendsCompass.bearing;
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
                // var grad = parseInt(userCompass.distance);
                // var compassGradient = '-webkit-gradient(radial, 100 0 , 100, 0 0,' + 900-grad +', from(#FF213D), to(#0E213D))';
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
