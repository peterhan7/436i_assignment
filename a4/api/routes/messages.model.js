var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Messages = new Schema({
    key: {type: Number},
    message: {type: String}
  },
  {
    collection: 'messages'
  });

module.exports = mongoose.model('Messages', Messages);
