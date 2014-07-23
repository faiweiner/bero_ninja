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
                //Check for iOS property
                if(event.webkitCompassHeading) {
                  
                  alpha = event.webkitCompassHeading + userCompass.bearing;
                  $('#alpha').text(event.webkitCompassHeading);
                  $('#accuracy').text(event.webkitCompassAccuracy);
                  $('#alphaWithBearing').text(alpha);
                  //Rotation is reversed for iOS
                  compass.style.WebkitTransform = 'rotate(-' + alpha  + 'deg)';
                }
                //non iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha + userCompass.bearing;
                  $('webkitAlpha').text(webkitAlpha);
                  if(!window.chrome) {
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
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
