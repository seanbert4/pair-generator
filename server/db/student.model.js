'use strict'

const mongoose = require('./index.js');

const studentSchema = new mongoose.Schema({
	name: String,
	limitPairs: {
		type: Boolean,
		default: false
	},
	pace: { // A higher number indicates a faster pace; the inverse is true as well.
		type: Number,
		default: 0
	},
	wantsSlowerThan: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Student'
	},
	wantsFasterThan: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Student'
	}
});

module.exports = mongoose.model('Student', studentSchema);