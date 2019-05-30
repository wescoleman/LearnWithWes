var mongoose = require('mongoose');

sketchSchema = new mongoose.Schema({
	name: String,
    image: String,
    address: String
});

Sketch = mongoose.model('sketch', sketchSchema);
// Sketch.create({
// 	name: 'physonics',
// 	image: 'https://i.imgur.com/kqliQf7.png',
// 	address: '/physonics'
// });

module.exports = Sketch;