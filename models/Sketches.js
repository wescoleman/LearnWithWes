var mongoose = require('mongoose');

sketchSchema = new mongoose.Schema({
	name: String,
    image: String,
    address: String
});

Sketch = mongoose.model('sketch', sketchSchema);
// Sketch.create({
// 	name: 'orbitalFollowers',
// 	image: 'https://i.imgur.com/wHkiHaT.png',
// 	address: '/orbitalFollowers'
// });

module.exports = Sketch;