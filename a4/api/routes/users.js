var express = require('express');
var router = express.Router();
let Messages = require('./messages.model');


//var messages = [{key: 1, message: "Peter Han"},{key: 2, message: "CPSC"},{key: 3, message: "436i"}];
var messages = [];
/* GET users listing. */
router.get('/getMessage', function(req, res, next){
  Messages.find(function(err, mes){
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
 console.log(req.body);
 messages.push(req.body);
 res.json(messages);
})

router.delete('/deleteMessage/:key', function(req, res, next) {
  //res.send("API is working");
  messages = messages.filter((message) => {
    console.log(req.params.key);
    console.log(message.key + " " + message.message);
    return parseFloat(message.key).toFixed(15) !== parseFloat(req.params.key).toFixed(15);
  });
  res.json(messages);
})

router.delete('/deleteAllMessage', function(req, res, next) {
  messages = [];
  res.json(messages);
})
module.exports = router;
