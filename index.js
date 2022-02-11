(function() {
    'use strict';
  
    // YOUR CODE HERE
  })();

//   Add DOM event listeners and handlers to toggle the on/off state of three bulbs.

// When a user clicks on the "Stop" button, toggle the stop bulb's color.
// When a user clicks on the "Slow" button, toggle the slow bulb's color.
// When a user clicks on the "Go" button, toggle the go bulb's color.
// TIP: All three bulbs can be on/off independently of one another.

// Add new DOM event listeners and handlers to log the mouse state of each button.

// When a user's mouse enters a button, log "Entered <textContent> button" to the console.
// When a user's mouse leaves a button, log "Left <textContent> button" to the console.
// TIP: Each event type will need a separate event listener.

// document.addEventListener("click", function(){
//   document.getElementById("stop").innerHTML = "Hello World";
// });

let colors= [ 
"yellow", 
"red",
"green"];

let button = document.getElementById('stopButton');
button.addEventListener('click', function(){
  var colors = "red";
  let stopLight = document.getElementById('stopLight');
  stopLight.style.background= colors;
});

// let button = document.getElementById('slowButton');
// button.addEventListener('click', function(){
//   var colors = "yellow";
//   let slowLight = document.getElementById('slowLight');
//   slowLight.style.background= colors;
// });

// let button = document.getElementById('goButton');
// button.addEventListener('click', function(){
//   var colors = "green";
//   let goLight = document.getElementById('goLight');
//   goLight.style.background= colors;
// });