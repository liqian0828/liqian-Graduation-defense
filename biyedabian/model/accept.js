var mongoose = require('./db.js');
var db=mongoose.connection;
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var acceptSchema=new  mongoose.Schema({


    jobs_id:{type:ObjectId},
    resume_id:{type:ObjectId},

    content:{type:String}

});
var acceptModel=db.model('accept',acceptSchema);
module.exports=acceptModel;