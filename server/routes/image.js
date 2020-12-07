const express = require('express');
const router = express.Router();
const multer = require('multer');
var fileExtension = require('file-extension');
const Image = require('../models/image.js');
var storage = multer.diskStorage({
	// Setting directory on disk to save uploaded files
	destination: function (req, file, cb) {
		//	cb(null, 'my_uploaded_files');
		cb(null, '../public/images');
	},

	// Setting name of file saved
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtension(file.originalname));
	},
});

var upload = multer({
	storage: storage,
	limits: {
		// Setting Image Size Limit to 2MBs
		fileSize: 2000000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
			//Error
			cb(new Error('Please upload JPG and PNG images only!'));
		}
		//Success
		cb(undefined, true);
	},
});
router.post(
	'/',
	//upload.single('file'),
	upload.array('files[]'),

	(req, res, next) => {
		const file = req.file;
		console.log(req);
		if (!file) {
			console.log(req);
			const error = new Error('Please upload a file');
			error.httpStatusCode = 400;
			return next(error);
		}
		res.status(200).send({
			statusCode: 200,
			status: 'success',
			uploadedFile: file,
			/*	name: req.file.originalname,
			type: req.file.mimetype,
			size: req.file.size,
			webkitRelativePath: file.webkitRelativePath,
			lastModifiedDate: file.lastModifiedDate,
			lastModified: file.lastModified,*/
		});
	},
	(error, req, res, next) => {
		res.status(400).send({
			error: error.message,
		});
	}
);
module.exports = router;
