//  $(document).ready(function(){
//  handler = Gmaps.build('Google');
//   handler.buildMap({ provider: {
//   }, internal: {id: 'map'}}, function(){
//     // markers = handler.addMarkers(#{raw @hash.to_json});
//     handler.fitMapToBounds();
//   });
// })

$(document).ready(function(){
  //  var defaultZoom = 16; // Why zoomed in? Because it looks good.

  // // create map and add controls
  // var mapOptions = {
  //   center: new google.maps.LatLng(13.731547730050778, 100.56798934936523),
  //   zoom: defaultZoom,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP,
  //   scrollwheel: false,
  //   scaleControl: false
  // };
  // var map = new google.maps.Map(document.getElementById('googlemap'),mapOptions);

  // // I'm Centering the map in Bangkok
  // // '13.731547730050778'
  // // '100.56798934936523'
  // var mylat = document.getElementById("location_lat").value;
  // var mylng = document.getElementById("location_lng").value;
  // if (jQuery.isEmptyObject(mylat)) {
  //   var mylat = '13.731548';
  //   var mylng = '100.56799';
  //   var defaultZoom = 14;
  // };
  // // set center point of map to be of the Marker or the Default City
  // var centrePoint = new google.maps.LatLng(mylat, mylng);
  // map.setCenter(centrePoint);
  // map.setZoom(defaultZoom);

  // // add a draggable marker
  // marker = new google.maps.Marker({
  //   map: map,
  //   draggable: true,
  //   animation: google.maps.Animation.DROP,
  //   position: centrePoint
  // });
  // var defaultImage = new google.maps.MarkerImage(
  //     "http://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
  //     new google.maps.Size(71, 71),
  //     new google.maps.Point(0, 0),
  //     new google.maps.Point(17, 34),
  //     new google.maps.Size(35, 35));
  // marker.setIcon(defaultImage);

  // google.maps.event.addListener(marker, 'click', toggleBounce);

  // // create Info window for marker
  // var infowindow = new google.maps.InfoWindow();

  // // Address Autocomplete
  // var input = document.getElementById('location_search');
  // var autocomplete = new google.maps.places.Autocomplete(input);
  // autocomplete.bindTo('bounds', map);

  // // add a drag listener to the map
  // google.maps.event.addListener(marker, "dragend", function() {
  //   var point = marker.getPosition();
  //   map.panTo(point);
  //   infowindow.close();
  //   marker.setIcon(defaultImage);
  // });
  // var place;
  // var photos;
  // // Autocomplete Listener
  // google.maps.event.addListener(autocomplete, 'place_changed', function() {
  //   place = autocomplete.getPlace();
  //   marker.setPosition(place.geometry.location);
  //   map.panTo(place.geometry.location);
  //   map.setZoom(16);

  //   // Sets the proper image on the marker. ie. school/hospital marker
  //   var image = new google.maps.MarkerImage(
  //       place.icon,
  //       new google.maps.Size(71, 71),
  //       new google.maps.Point(0, 0),
  //       new google.maps.Point(17, 34),
  //       new google.maps.Size(35, 35));
  //   marker.setIcon(image);
  //   marker.setPosition(place.geometry.location);
  //   var address = '';
  //   if (place.address_components) {
  //     address = [(place.address_components[0] &&
  //                 place.address_components[0].short_name || ''),
  //                (place.address_components[1] &&
  //                 place.address_components[1].short_name || ''),
  //                (place.address_components[2] &&
  //                 place.address_components[2].short_name || '')
  //               ].join(' ');
  //   }
  //   infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
  //   infowindow.open(map, marker);

  //   // Autofill the fields in the form. TODO: improve parsing of the returned JSON data.
  //   var address = place.address_components;
  //   var website = place.url;
  //   if (address[address.length - 1]) {
  //     var zipcode = address[address.length - 1].long_name;
  //   };
  //   if (address[address.length - 2]) {
  //     var country = address[address.length - 2].long_name;
  //   };
  //   if (address[address.length - 3]) {
  //     var city = address[address.length - 3].long_name;
  //   };
  //   if (address[address.length - 4]) {
  //     var sublocality = address[address.length - 4].long_name;
  //   };
  //   if (address[0]) {
  //     var streetnumber = address[0].long_name;
  //   };
  //   if (address[1]) {
  //     var streetname = address[1].long_name;
  //   };
  //   if (place.name) {
  //     var location_name = place.name;
  //   }
  //   var formatted_address = place.formatted_address;
  //   var formatted_phone_number = place.formatted_phone_number;

  //   if (zipcode){
  //     document.getElementById("origin_address_zipcode").value = zipcode;
  //   }
  //   if (city) {
  //     document.getElementById("origin_address_city").value = city;
  //   }

  //   if (streetname) {
  //     document.getElementById("origin_address_street_address").value = streetname;
  //   }
  //   photos = place.photos;
  //   $('#place_images').empty();
  //   for (var i = 0; i < photos.length; i++) {
  //     var url = photos[i].getUrl({maxHeight: "1280", maxWidth: "1280"});
  //     $('#place_images').prepend('<img src="' + url + '"/>');
  //   }
  // });

  // // This is the function to animate the marker after dropping it.
  // function toggleBounce() {
  //   if (marker.getAnimation() != null) {
  //     marker.setAnimation(null);
  //   } else {
  //     marker.setAnimation(google.maps.Animation.BOUNCE);
  //   }
  // };
})