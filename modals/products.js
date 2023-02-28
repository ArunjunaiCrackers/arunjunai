var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath:{type:String},
    name: {type:String, required:true},
    content:{type:String, required:true},
    type:{type:String, required:true},
    actualPrice:{type:Number, required:true},
    discountPrice:{type:Number, required:true},
    availability:{type:Boolean,default:1},
    flag:{type:String, default:"pass"}   
});

module.exports = mongoose.model('Product', schema);