var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define a new schema
var TemplateSchema = new Schema({
    id: String,
    coordinates: [Number,Number],
    img_hi_res : String,
    img_lo_res :String,
    img_thumb : String,
    time: Number
});

module.exports = mongoose.model('Template', TemplateSchema);