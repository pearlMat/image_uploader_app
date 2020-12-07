const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
	id: String,
	imageUrl: String,
	lastModified: Number,
	astModifiedDate: Date,
	name: String,
	size: Number,
	type: String,
	webkitRelativePath: '',
	uploaded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);
