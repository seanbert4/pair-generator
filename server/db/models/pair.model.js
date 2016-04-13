'use strict'

const mongoose = require('./index.js');

const pairSchema = new mongoose.Schema({
	students: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Student'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Pair', pairSchema);