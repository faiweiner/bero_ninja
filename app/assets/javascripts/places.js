var showPlaces = function(userLocation){
  
// Gets current user loction, passed into showPlace and used to center the map
// and drop a marker on current location.
var success = function(position) {
  var userLocation = position.coords;
  display_map(userLocation.latitude, userLocation.longitude, 15);
  add_marker(userLocation.latitude, userLocation.longitude)
};

var error = function(err) {
  alert("We can't find you :(")
};

navigator.geolocation.getCurrentPosition(success, error);

  $('#new_place').on('ajax:success', function (event,place){
    $('#new_place').get(0).reset();
    add_marker(place.latitude, place.longitude, place.address);
  });
};
var map;

var display_map = function (latitude, longitude, zoom) {
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: zoom,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
    {
        "featureType": "all",
        "stylers": [
            {
                "saturation": -95
            },
            {
                "gamma": 0.5
            }
        ]
    }
]

  };

  var canvas = $('#map_canvas').get(0);

  map = new google.maps.Map(canvas, mapOptions);

  google.maps.event.addListener(map, 'click', function(e) {
    placeMarker(e.latLng, map);
  });

  function placeMarker(position, map) {
     var pin = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 5,
    strokeColor: '#1D5170',
    strokeWeight: 5
  };

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: pin,
      animation: google.maps.Animation.DROP
    });
  }
};

var add_marker = function (latitude, longitude, address) {
  var pin = {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 5,
    strokeColor: '#1D5170',
    strokeWeight: 5
  };
  var latlng = new google.maps.LatLng(latitude, longitude);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    address: address,
    icon: pin,
    animation: google.maps.Animation.DROP
  });
};