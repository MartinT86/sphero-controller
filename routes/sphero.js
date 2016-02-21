var express = require('express');
var router = express.Router();
var sphero = require("sphero"),
    orb = sphero("/dev/rfcomm0"); // change port accordingly 

orb.connect(function() {
    orb.color("white");
    });

router.post('/red', function(req, res) {
  //orb.connect(function() {
    orb.color("red");
    //});
      res.send('gone red');

});

router.post('/green', function(req, res) {
  //orb.connect(function() {
    orb.color("green");
    //});
      res.send('gone green');

});

router.post('/blue', function(req, res) {
  //orb.connect(function() {
    orb.color("blue");
    //});
      res.send('gone blue');

});

module.exports = router;