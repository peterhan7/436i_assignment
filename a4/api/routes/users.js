var express = require('express');
var router = express.Router();
let Messages = require('./messages.model');
var mongoose = require('mongoose');
var config = require('./DB.js');
var MongoClient = require('mongodb').MongoClient;

//var messages = [{key: 1, message: "Peter Han"},{key: 2, message: "CPSC"},{key: 3, message: "436i"}];
var messages = [];
/* GET users listing. */
MongoClient.connect(config.DB, { useNewUrlParser: true }, function(err, db) {
  console.log('Database is connected')
  var dbase = db.db("messages");
  router.get('/getMessage', function(req, res, next){
    dbase.collection('messages').find({}).toArray(function(err, mes){
      if(err){
        console.log(err);
      }
      else {
        console.log(mes);
        res.json(mes);
      }
    });
  });
  router.post('/addMessage', function(req, res, next) {
    dbase.collection('messages').insertOne({key: req.body.key, message: req.body.message}, function(err, mes){
      if(err){
        console.log(err);
      }
      else{
      console.log(req.body);
      messages.push(req.body);
      res.json(messages);
    }
    });
  });

   router.delete('/deleteMessage/:key', function(req, res, next) {
     //res.send("API is working");
     var reqKey = req.params.key;
     console.log("gg: " + reqKey);
     dbase.collection('messages').deleteOne({key: Number(reqKey)}, function(err, mes){
       console.log("test point");
       if(err){
         console.log(err);
       }
       else{
         messages = messages.filter((message) => {
           console.log(req.params.key);
           return parseFloat(message.key).toFixed(15) !== parseFloat(req.params.key).toFixed(15);
         });
         res.json(messages);
       }
     });
   });

   router.delete('/deleteAllMessage', function(req, res, next) {
     messages = [];
     res.json(messages);
   })
});

module.exports = router;
