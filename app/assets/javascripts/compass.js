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

                console.log(userCompass.distance)
                var distanceNow = parseInt(userCompass.distance);
                userCompass.distanceOrig = userCompass.distanceOrig || distanceNow;
                console.log('original distance', userCompass.distanceOrig, 'distance now', distanceNow);
                // Finding the range of colors in percentage for distance.

                if ((userCompass.distanceOrig != distanceNow) && (userCompass.distanceOrig > distanceNow)) {
                  range = 3000 * (1 - (distanceNow/userCompass.distanceOrig));
                  // return range;
                  console.log(range);
                } else {
                  range = 3000 * (1 - (0.9));
                  // return range;
                  console.log(range);
                }
                // distanceNow = (4000/distanceNow);
                console.log(range);
                var compassGradient = '-webkit-gradient(radial, 50% 0 , 0, 50% 0,' + parseInt(range) +', from(#FF213D), to(#0E213D))';
                $('#compass').css('background', compassGradient);
                console.log(compassGradient);


                // var compassGradient = '-webkit-gradient(radial, 50% 0 , 0, 50% 0,' + dist +', from(#FF213D), to(#0E213D))';
                // $('body').css('background', compassGradient);
                $('#compass').css({'-webkit-background-clip': 'text'});
                $('#compass').css({'-webkit-text-fill-color': 'transparent'});

              }, false);
    }
  }
});

