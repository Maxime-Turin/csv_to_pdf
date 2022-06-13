const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const multer = require('./middlewares/multer')

router.get('/', mainController.home )

router.post('/', multer, mainController.sendFile)



module.exports = router;

