$(document).ready(function(){
  var creature = prompt("Do you want to learn about turtles, snakes, or insects?");

  if (creature === "turtles"){
    $("#turtles").show();
  } else if (creature === "snakes"){
    $("#snakes").show();
  } else {
    $("#insects").show();
  }
});
