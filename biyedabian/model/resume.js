var mongoose = require('./db.js');
var db=mongoose.connection;
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var resumeSchema=new  mongoose.Schema({


    username:{type:String},
    age:{type:Number},
    work:{type:String},

    other:{type:String}

});
var resumeModel=db.model('resume',resumeSchema);
module.exports=resumetModel;