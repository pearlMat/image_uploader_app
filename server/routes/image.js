const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require('../models/image.js');

// Save file to server storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, '../public/images');
	},
	filename: (req, file, cb) => {
		console.log(file);
		let filetype = '';
		if (file.mimetype === 'image/gif') {
			filetype = 'gif';
		}
		if (file.mimetype === 'image/png') {
			filetype = 'png';
		}
		if (file.mimetype === 'image/jpeg') {
			filetype = 'jpg';
		}
		cb(null, 'image-' + Date.now() + '.' + filetype);
	},
});

const upload = multer({ storage: storage });

// get data by id
router.get('/:id', function (req, res, next) {
	Image.findById(req.params.id, function (err, image) {
		if (err) return next(err);
		res.json(image);
	});
});

// post data
router.post('/', upload.single('file'), function (req, res, next) {
	if (!req.file) {
		return res.status(500).send({ message: 'Sorry! could not upload file' });
	} else {
		req.body.imageUrl = 'http://192.168.0.7:3000/images/' + req.file.filename;
		Image.create(req.body, function (err, image) {
			if (err) {
				console.log(err);
				return next(err);
			}
			res.json(image);
		});
	}
});

module.exports = router;
