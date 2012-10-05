$ ->
  $.getJSON('/guests', (data, status) ->
    console.log data
    guests = _.map data, (f) ->
      f['name']
    console.log guests
    $('input').typeahead(
      source: guests
    )
  )

