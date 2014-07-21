$(document).ready(function() {
display_map(-33.8698426, 151.2061608, 17);
add_marker(-33.8698426, 151.2061608, "GA");

  $('#new_place').on('ajax:success', function (event,place){
    $('#new_place').get(0).reset();
    add_marker(place.latitude, place.longitude, place.address);
  });
});

var map;

var display_map = function (latitude, longitude, zoom) {
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "color": "#e0efef"
      }]
    }, {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [{
        "visibility": "on"
      }, {
        "hue": "#1900ff"
      }, {
        "color": "#c0e8e8"
      }]
    }, {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill"
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "lightness": 100
      }, {
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "stylers": [{
        "color": "#7dcdcd"
      }]
    }, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "on"
      }, {
        "lightness": 700
      }]
    }]
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
      animation: google.maps.Animation.BOUNCE
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
    animation: google.maps.Animation.BOUNCE
  });
};