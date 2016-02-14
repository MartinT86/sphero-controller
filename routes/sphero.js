var express = require('express');
var router = express.Router();
var sphero = require("sphero"),
    orb = sphero("/dev/rfcomm0"); // change port accordingly 



router.get('/red', function(req, res) {
  orb.connect(function() {
    // Sphero's connected! 
    // do some cool stuff here! 
    //orb.roll(50, 0);
    //   orb.color("green");
    orb.color("red");
        
    });
      res.send('gone red');

});

router.get('/green', function(req, res) {
  orb.connect(function() {
    // Sphero's connected! 
    // do some cool stuff here! 
    //orb.roll(50, 0);
    //   orb.color("green");
    orb.color("green");
        
    });
      res.send('gone green');

});

module.exports = router;