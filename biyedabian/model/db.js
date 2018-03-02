var mongoose =require("mongoose");
mongoose.connect("mongodb://localhost:27017/biyedabian");

module.exports=mongoose;