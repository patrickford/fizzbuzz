$(document).ready(function() {

  function fizzbuzz(value) {
    if (value % 15 === 0) {
      return('fizzbuzz');
    } else if (value % 3 === 0) {
      return('fizz');        
    } else if (value % 5 === 0) {
      return('buzz');        
    } else {
      return(value);               
    }
  }

  // Set an event handler for the enter button
  // Get the value entered when button clicked.
  $('#enter').click(function() {    
    // Convert text input to integer with ParseInt
    var max = parseInt($('#maxValue').val());
    // Clear output div 
    $('#output').empty(); 
    // Iterate from 1 to max   
    for (var i=1; i<=max; i++) {
      // Append an element to the output for each value
      // Call the fizzbuzz function to get the inner text
      $('#output').append('<p>' + fizzbuzz(i) + '</p>');
    }
    // reset input field
    $('#maxValue').val('');
    // return false to prevent page refresh
    return false;
  })

});