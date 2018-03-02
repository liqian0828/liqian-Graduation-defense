var mongoose = require('./db.js');
var db=mongoose.connection;
var usersSchema=new  mongoose.Schema({
    username:{type:String},
    password:{type:String},
    type:{type:Number}
});

var userModel=db.model('users',usersSchema);

module.exports=userModel;