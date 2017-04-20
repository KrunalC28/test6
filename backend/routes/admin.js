var express = require('express');
var router = express.Router();
var admin = require('../models/admin');
var db = require('../dbconnection');

/* GET users listing. */
router.post('/addUser', function (req, res, next) {
  admin.adduser(req.body, function (err, rows) {
    console.log(req.body);
    if (err) {
      res.json(err);
    }
    else {
      console.log(rows[0]);
      res.json(rows);
    }
  });
})

router.get('/users', function (req, res, next) {
  admin.getusers(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/users/:search', function (req, res, next) {

  admin.getsearchusers(req.params.search, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.post('/updateRole', function (req, res, next) {
  admin.updateRole(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      router.get('/users', function (req, res, next) {
        admin.getusers(function (err, rows) {
          if (err) {
            res.json(err);
          }
          else {
            res.json(rows);
          }
        });
      })
    }
  });
})

router.post('/updateStatus', function (req, res, next) {
  admin.updateStatus(req.body, function (err, rows) {
    if (err) {
      console.log('Error in Status Update');
      res.json(err);
    }
    else {
      console.log('Else part in Status Update');
      router.get('/users', function (req, res, next) {
        admin.getusers(function (err, rows) {
          if (err) {
            console.log('Error in fetching data after Status Update');
            res.json(err);
          }
          else {
            console.log('Successfull Return after Status update');
            res.json(rows);
          }
        });
      })
    }
  });
})

router.post('/addTraining', function (req, res, next) {
  console.log(req.body);
  admin.addTraining(req.body, function (err, rows) {
    console.log('In Function');
    if (err) {
      console.log(err);
      res.json(err);
    }
    else {
      console.log(rows[0]);
      res.json(rows);
    }
  });
})

router.get('/trainings', function (req, res, next) {
  admin.gettrainings(function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

router.get('/trainings/:search', function (req, res, next) {

  admin.getsearchtrainings(req.params.search, function (err, rows) {
    if (err) {
      res.json(err);
    }
    else {
      res.json(rows);
    }
  });
})

module.exports = router;
