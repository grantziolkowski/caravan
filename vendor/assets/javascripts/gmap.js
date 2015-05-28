GmapAutoComplete = function(address) {
  var addressFields = {
    field: address + "_address_string",
    latitude: address + "_latitude",
    longitude: address + "_longitude",
    zipCode: address + "_zip_code",
    city: address + "_city",
    state: address + "_state",
    streetAddress: address + "_street_address"
  };

  var addressComponents = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    postal_code: 'short_name'
  };

  // Autocomplete
  var options = {
    types: ['geocode'],
    componentRestrictions: {country: "us"}
  };
  var addressInput = document.getElementById(addressFields.field);
  var addressField = new google.maps.places.Autocomplete(addressInput, options);

  // Autocomplete Listener
  google.maps.event.addListener(addressField, 'place_changed', function() {
    var streetAddress, streetNumber, route, zipcode, city, state;
    var place = addressField.getPlace();

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];

      if (addressComponents[addressType]) {
        var val = place.address_components[i][addressComponents[addressType]];
        switch(addressType) {
          case "street_number":
            streetNumber = val;
            break;
          case "route":
            route = val;
            break;
          case "locality":
            city = val;
            break;
          case "administrative_area_level_1":
            state = val;
            break;
          case "postal_code":
            zipCode = val;
            break;
        }
      }
    }

    // Autofill the fields in the form. TODO: improve parsing of the returned JSON data.
    document.getElementById(addressFields.latitude).value = place.geometry.location.lat();
    document.getElementById(addressFields.longitude).value = place.geometry.location.lng();

    if (zipCode) {
      document.getElementById(addressFields.zipCode).value = zipCode;
    }

    if (city) {
      document.getElementById(addressFields.city).value = city;
    }

    if (state) {
      document.getElementById(addressFields.state).value = state;
    }

    if (streetNumber && route) {
      document.getElementById(addressFields.streetAddress).value = streetNumber + ' ' + route;
    }
  });
};