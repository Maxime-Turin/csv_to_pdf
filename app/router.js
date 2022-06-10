const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const multer = require('./middlewares/multer')

router.get('/up', mainController.home )

router.post('/up', multer, mainController.sendFile)

module.exports = router;

//!Multer CPT (fonctionne mais n'upload pas l'img dans dossier upload ???)