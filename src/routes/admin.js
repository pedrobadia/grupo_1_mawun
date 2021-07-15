const express = require('express');
const router = express.Router();
const multer = require ('multer');

const adminController = require('../controllers/admin-controller');

router.get('/crear', adminController.create);

module.exports = router;