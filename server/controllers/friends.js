var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");

console.log('friends controller');
module.exports = {
  index: function(req,res){
    //your code here
    //Gather all of the friends in the database
    Friend.find({}, function(err, results){
        //And return them as a JSON object
        res.json(results);
    })
  },
  create: function(req,res){
    //your code here
    Friend.create(req.body, function(err,result){
        console.log("Inside server/controllers/friends.js/create!  newFriend object should follow")
        console.log(req.body)
        if(err){
            console.log(err);
        }else{
            res.json(result);
        }
    })
  },
  update: function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, friend){
      if(err){
        console.log(err);
      }else{
        friend.name = req.body.name;
        friend.lang = req.body.lang;
        friend.save(function(err, updatedFriend){
          if (err){
            console.log(err);
          }else{
            res.json(updatedFriend);
          }
        })
      }
    })
  },
  delete: function(req,res){
    //your code here
    Friend.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Friend deleted!"});
      }
    })
  },
  show: function(req,res){
    //your code here
    Friend.findOne({_id: req.params.id}, function(err, result){
      res.json(result);
    })
  }
}