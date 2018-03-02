var mongoose = require('./db.js');
var db=mongoose.connection;
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var jobsSchema=new  mongoose.Schema({
    users_id:{type:ObjectId},
    title:{type:String},

    content:{type:String}

});
var jobsModel=db.model('jobs',jobsSchema);
module.exports=jobsModel;