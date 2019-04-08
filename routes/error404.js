const path = require('path');

const express = require('express');

const errorController = require('../controllers/ctrl_error404');

const router = express.Router();

router.get('admin/add-product/*', errorController);

module.exports = router;