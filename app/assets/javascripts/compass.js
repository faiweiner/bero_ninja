function init() {
        var compass = document.getElementById('compass');
        if(window.DeviceOrientationEvent) {
 
          window.addEventListener('deviceorientation', function(event) {
                var alpha;
                //Check for iOS property
                if(event.webkitCompassHeading) {
                  alpha = event.webkitCompassHeading;
                  //Rotation is reversed for iOS
                  compass.style.WebkitTransform = 'rotate(-' + alpha + compass.bearing + 'deg)';
                }
                //non iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha + compass.bearing;
                  if(!window.chrome) {
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
                  }
                }
 
                compass.style.Transform = 'rotate(' + alpha + 'deg)';
                compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //Rotation is reversed for FF
                compass.style.MozTransform = 'rotate(-' + alpha + 'deg)'; 
              }, false);
        }
      }

 window.setTimeout(init, 6000, false);