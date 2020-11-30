const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
	id: String,
	imageUrl: String,
	imageTitle: String,
	imageDesc: String,
	uploaded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);
