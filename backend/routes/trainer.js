var express = require('express');
var router = express.Router();
var trainer = require('../models/trainer');
var db = require('../dbconnection');

/* GET users listing. */
router.get('/:name', function (req, res, next) {

  trainer.getmytrainings(req.params.name, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/searchTrainings/', function (req, res, next) {

  trainer.getsearchtrainings(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

module.exports = router;
