$(document).ready(function () {
  display_map(-33.8698426, 151.2061608, 12);
  add_marker(-33.8698426, 151.2061608, "GA");
});

var map;

var display_map = function (latitude, longitude, zoom) {
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var canvas = $('#map_canvas').get(0);

  map = new google.maps.Map(canvas, mapOptions);
};

var add_marker = function (latitude, longitude, address) {
  var latlng = new google.maps.LatLng(latitude, longitude);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    address: address
  });

};