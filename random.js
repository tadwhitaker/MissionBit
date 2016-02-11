var names = {
  0: "Jarita",
  1: "Sammi",
  2: "Joanna",
  3: "Kaitlyn",
  4: "Hind",
  5: "Joey",
  6: "Zoriyah",
  7: "Fiona",
  8: "Jazmin",
  9: "Amanda",
  10: "Annette",
  11: "Jeannette",
  12: "Francy"
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
var size = Object.size(names);

var person;

function random(argument) {
  
  var digit = Math.floor((Math.random() * size) + 1);
  person = names[digit];
  console.log(names[digit]);
  return digit;
}

random(names);


var contentString = '<h2>' + person + '</h2>';

$("#button").on('click', function() {
  $('.person').html(contentString);
});