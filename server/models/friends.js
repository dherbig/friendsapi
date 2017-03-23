console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    name: String,
    lang: String
});
mongoose.model("Friend", FriendSchema);