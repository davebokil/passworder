var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

router.get('/active', ensureAuthenticated, function(req, res){
	res.render('active');
});

router.get('/twoway', ensureAuthenticated, function(req, res){
	res.render('twoway');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;