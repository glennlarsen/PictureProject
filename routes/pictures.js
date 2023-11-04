var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

/* GET pictures listing. */
router.get('/', function(req, res, next) {
    const pictures = fs.readdirSync(path.join(__dirname, '../pictures/'));
    res.render('pictures', { pictures: pictures});
  });

  router.get('/:pictureName', function(req, res, next) {
    const pictureName = req.params.pictureName;
    const pictures = fs.readdirSync(path.join(__dirname, `../pictures/`));
    const filteredPictures = pictures.filter((pic) => pic ===  pictureName)
    res.render('pictures', { pictures: filteredPictures});
  });

router.post('/', function(req, res, next) {
    const file = req.files.file;
    fs.writeFileSync(path.join(__dirname, '../pictures/', file.name), file.data);
    res.end();
  });

module.exports = router;