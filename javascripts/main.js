(function() {

  $(function() {
    return $.getJSON('/guests', function(data, status) {
      var guests;
      console.log(data);
      guests = _.map(data, function(f) {
        return f['name'];
      });
      console.log(guests);
      return $('input').typeahead({
        source: guests
      });
    });
  });

}).call(this);
