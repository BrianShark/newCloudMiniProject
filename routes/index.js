var express = require('express');
var router = express.Router();
var Time = require('../models/time');
var mongoose = require('mongoose');
/* GET home page. */
mongoose.connect("mongodb://localhost:27017/timestamps", { useNewUrlParser: true });
router.get('/', function(req, res, next) {
Time.find(function(err,docs){
    var timeChunks = [];
    chunkSize = 3;
    for(var i = 0; i < docs.length; i+= chunkSize ){
      timeChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('home/index', { title: 'Cloud Security System', times: timeChunks });
  }).lean();
});

router.get('/info', function(req,res,next) {
  res.render('home/info', { title: 'Information'});
})

router.get('/index', function(req,res,next) {
  Time.find(function(err,docs){
      var timeChunks = [];
      chunkSize = 3;
      for(var i = 0; i < docs.length; i+= chunkSize ){
        timeChunks.push(docs.slice(i,i+chunkSize));
      }
      res.render('home/index', { title: 'Cloud Security System', times: timeChunks });
    }).lean();
})

module.exports = router;
