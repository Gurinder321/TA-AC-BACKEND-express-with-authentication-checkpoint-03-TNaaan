var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/userDashboard', (req, res) => {
  res.render('userDashboard');
});

router.get('/adminDashboard', (req, res) => {
  res.render('adminDashboard');
});

router.get('/success', (req, res) => {
  res.render('success');
});

router.get('/failure', (req, res) => {
  res.render('failure');
});

router.get('/auth/github', passport.authenticate('github'));

router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/failure' }, (req, res) => {
    res.redirect('/success');
  })
);

module.exports = router;
