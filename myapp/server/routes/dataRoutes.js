const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.post('/create', dataController.createRecords);

module.exports = router;