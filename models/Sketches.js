var mongoose = require('mongoose');

sketchSchema = mongoose.Schema({
    image: String
});

module.exports = mongoose.model('sketch', sketchSchema);