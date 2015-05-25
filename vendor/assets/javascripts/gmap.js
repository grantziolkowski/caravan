GmapAutoComplete = function(address) {
  // Autocomplete
 var originInput = document.getElementById(address + "_address_string");
 var destinationInput = document.getElementById('destination_address_address_string');
  var originField = new google.maps.places.Autocomplete(originInput);
  var destinationField = new google.maps.places.Autocomplete(destinationInput);
  var place;
  var photos;
  // Autocomplete Listener
  google.maps.event.addListener(originField, 'place_changed', function() {
    place = originField.getPlace();

    document.getElementById(address + "_latitude").value = place.geometry.location.lat();
    document.getElementById(address + "_longitude").value = place.geometry.location.lng();

    var address = '';
    if (place.address_components) {
      address = [(place.address_components[0] &&
                  place.address_components[0].short_name || ''),
                 (place.address_components[1] &&
                  place.address_components[1].short_name || ''),
                 (place.address_components[2] &&
                  place.address_components[2].short_name || '')
                ].join(' ');
    }
    // Autofill the fields in the form. TODO: improve parsing of the returned JSON data.
    var address = place.address_components;
    if (address[address.length - 1]) {
      var zipcode = address[address.length - 1].long_name;
    };
    if (address[address.length - 2]) {
      var country = address[address.length - 2].long_name;
    };
    if (address[address.length - 3]) {
       var state = address[address.length - 3].short_name
     };
    if (address.length === 9 ) {
      var city = address[address.length - 3].long_name;
     };
    if (address.length === 8 ) {
      var city = address[address.length - 5].long_name;
     };
    if (address[0]) {
      var streetnumber = address[0].long_name;
    };
    if (address[1]) {
      var streetname = address[1].long_name;
    };
    if (place.name) {
      var location_name = place.name;
    }

    if (zipcode){
      document.getElementById(address + "_zip_code").value = zipcode;
    }
    if (city) {
      document.getElementById(address + "_city").value = city;
    }
    if (state) {
      document.getElementById(address + "_state").value = state;
    }
    if (location_name) {
      document.getElementById(address + "_street_address").value = location_name;
    }
  });
  google.maps.event.addListener(destinationField, 'place_changed', function() {
      place = destinationField.getPlace();

      document.getElementById("destination_address_latitude").value = place.geometry.location.lat();
      document.getElementById("destination_address_longitude").value = place.geometry.location.lng();

      var address = '';
      if (place.address_components) {
        address = [(place.address_components[0] &&
                    place.address_components[0].short_name || ''),
                   (place.address_components[1] &&
                    place.address_components[1].short_name || ''),
                   (place.address_components[2] &&
                    place.address_components[2].short_name || '')
                  ].join(' ');
      }
      // Autofill the fields in the form. TODO: improve parsing of the returned JSON data.
      var address = place.address_components;
      if (address[address.length - 1]) {
        var zipcode = address[address.length - 1].long_name;
      };
      if (address[address.length - 2]) {
        var country = address[address.length - 2].long_name;
      };
      if (address[address.length - 3]) {
       var state = address[address.length - 3].short_name
       };
      if (address.length === 9 ) {
      var city = address[address.length - 3].long_name;
       };
      if (address.length === 8 ) {
      var city = address[address.length - 5].long_name;
      };
      if (address[0]) {
        var streetnumber = address[0].long_name;
      };
      if (address[1]) {
        var streetname = address[1].long_name;
      };
      if (place.name) {
        var location_name = place.name;
      }

      if (zipcode){
        document.getElementById("destination_address_zip_code").value = zipcode;
      }
      if (city) {
        document.getElementById("destination_address_city").value = city;
      }
      if (state) {
        document.getElementById("destination_address_state").value = state;
      }
      if (location_name) {
        document.getElementById("destination_address_street_address").value = location_name;
      }
    });

}