'use strict';
const express = require('express'),
	CostController = require('../controllers/costController'),
	api = express.Router();

// get cost by route include time, kilometer, origin and destiny weather
api.get('/cost/:latorigen/:lonorigen/:latdestino/:londestino', CostController.getCost);

module.exports = api;
