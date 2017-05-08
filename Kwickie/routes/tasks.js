var express  = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var http = require('http');
var request = require('request');
var db = mongojs('mongodb://joeowner:joeowner@ds115071.mlab.com:15071/kwickie', ['kwickies'])

router.post('/rego', function(req, res, next){
	var usr = req.body;

	console.log(req.body);
	
	request({
	uri: 'https://www.giantbomb.com/api/search/api/Members',
	qs: usr
	}).on('error', function(err) {
		res.send(err);
	}).pipe(res);
});


// get all kwickies
router.get('/tasks', function(req, res, next){
	db.kwickies.find(function(err, kwickies){
		if(err){
			res.send(err);
		}
		res.json(kwickies);
	});
});

// get ONE kwickie
router.get('/tasks/:id', function(req, res, next){
	db.kwickies.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, kwickie){
		if(err){
			res.send(err);
		}
		res.json(kwickie);
	});
});

//save kwickie
router.post('/task', function(req, res, next){
	var kwickie = req.body;
	if( !kwickie.name || !kwickie.id || !kwickie.icon || !kwickie.description )
	{
		res.status(400);
		res.json({
			"error" : "Bad Data"
		});
	}else{
		db.kwickies.save(kwickie, function(err, kwickie){
			if(err){
				res.send(err);
			}
			res.json(kwickie);
		});
	}
});


//Delete kwickie
router.delete('/task/:id', function(req, res, next){
	db.kwickies.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, kwickie){
		if(err){
			res.send(err);
		}
		res.json(kwickie);
	});
});

//Update
router.put('/task/:id', function(req, res, next){
	var kwickie = req.body
	var updKwick = {};

	if(kwickie.name){
		updKwick.name = kwickie.name;
	}

	if(kwickie.id){
		updKwick.id = kwickie.id;
	}

	if(kwickie.icon){
		updKwick.icon = kwickie.icon;
	}
	
	if(kwickie.description){
		updKwick.description = kwickie.description;
	}
	
	if(!updKwick){
		res.status(400);
		res.json({
			"error" : "Bad Update Data"
		});
	}
	else{
		db.kwickies.update({_id: mongojs.ObjectId(req.params.id)}, updKwick, {}, function(err, kwickie){
			if(err){
				res.send(err);
			}
			res.json(kwickie);
		});
	}
});

module.exports = router;