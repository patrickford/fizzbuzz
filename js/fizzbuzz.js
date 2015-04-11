$(document).ready(function() {

  function fizzbuzz(max) {
    // Clear output div 
    $('#output').empty();

    // Iterate from 1 to the value entered
    for (var i=1; i<=max; i++) {
      if (i % 15 === 0) {
        $('#output').append('<p>'+'fizzbuzz'+'</p>');
      } else if (i % 3 === 0) {
        $('#output').append('<p>'+'fizz'+'</p>');        
      } else if (i % 5 === 0) {
        $('#output').append('<p>'+'buzz'+'</p>');        
      } else {
       $('#output').append('<p>'+ i +'</p>');               
      }
    }
  }

  // Set an event handler for the enter button
  // Get the value entered when button clicked.
  $('#enter').click(function() {    
    // Convert text input to integer with ParseInt
    var max = parseInt($('#maxValue').val());
    // Call the fizzbuzz function 
    fizzbuzz(max);
    // reset input field
    $('#maxValue').val('');
    // return false to prevent page refresh
    return false;
  })

});