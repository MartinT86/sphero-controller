var express = require('express');
var app = express();

var index = require('./routes/index')
var red = require('./routes/sphero')

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs'); 

app.use('/', index);
app.use('/colour', red);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// var sphero = require("sphero"),
//     orb = sphero("/dev/rfcomm0"); // change port accordingly 
//  
// orb.connect(function() {
//   // Sphero's connected! 
//   // do some cool stuff here! 
//   //orb.roll(50, 0);
// //   orb.color("green");
// //   orb.color("red");
//     
// });