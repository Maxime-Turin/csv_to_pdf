//Middleware to setup multer
const path = require('path')
const multer = require('multer')

// On définie la destination de l'upload et le nom du fichier
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //! Multer n'aime pas les chemins sans path
    cb(null, path.join(__dirname, '../../public/uploads'))
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(' ').join('_');
    const extension = '.jpg';
    cb(null, name + '_' + Date.now() + extension);
  }
});


// On export multer 
module.exports = multer({storage}).single('uploaded_file');
