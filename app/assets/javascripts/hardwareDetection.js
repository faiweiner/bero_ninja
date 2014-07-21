var hardwareDetection = function() {
  if (navigator.geolocation) {
    console.log("We can find you because you have geolocator");
  } else {
    console.log("Sorry, you can't use our app because no dice");
  };
};