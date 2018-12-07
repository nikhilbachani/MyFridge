var mongoose = require('mongoose');
var food = mongoose.model('Food');

var sendJSONresponse = function(res, status, content) {
	res.status(status);
	res.json(content);
}

/* GET the entire food list */
module.exports.foodList = function(req, res){
	food.find()
	.exec(function(err, foodList){
		if(err){
			console.log(err);
			sendJSONresponse(res, 404, err);
			return;
		}
		console.log(foodList);
		sendJSONresponse(res, 200, foodList);
	});
}

/* GET a food item */
module.exports.foodReadOne = function(req, res) {
	if(req.params && req.params.foodid){
	food
		.findById(req.params.foodid)
		.exec(function(err, foodItem) {
			if(!foodItem) {
				sendJSONresponse(res, 404, {
					"message": "No food item found with specified ID"
				});
				return;
			}
			else if(err){
				console.log(err);
				sendJSONresponse(res, 404, err);
				return;
			}
			console.log(foodItem);
			sendJSONresponse(res, 200, foodItem);
		});
	}
	else{
		console.log('No food id specified');
		sendJSONresponse(res, 404, {
			"message": "No food id in request"
		});
	}
};

/* POST a new food item */
module.exports.foodCreate = function(req, res) {
	food.create({
		name: req.body.name,
		date: req.body.date,
		expiry: req.body.expiry,
		left_overs: req.body.left_overs,
		quantity: req.body.quantity
	}, function(err, foodItem) {
		if(err) {
			console.log(err);
			sendJSONresponse(res, 400, err);
		}
		else {
			console.log("Created: " + foodItem);
			res.header("_id", foodItem.id);
			sendJSONresponse(res, 201, foodItem);
		}
	});
};

/* UPDATE a food item */
module.exports.foodUpdateOne = function(req, res) {
	if(!req.params.foodid) {
		sendJSONresponse(res, 404, {
			"message": "No food id in request"
		});
		return;
	}
	food.findById(req.params.foodid)
		.exec(function(err, foodItem){
			if(!foodItem){
				sendJSONresponse(res, 404, { "message": "No food item found with specified ID"
				});
				return;
			}
			else if(err) {
				sendJSONresponse(res, 404, err);
				return;
			}
			foodItem.name = req.body.name ? req.body.name : foodItem.name;
			foodItem.date = req.body.date ? req.body.date: foodItem.date;
			foodItem.expiry = req.body.expiry? req.body.expiry: undefined;
			foodItem.left_overs = req.body.left_overs ? req.body.left_overs: foodItem.left_overs;
			foodItem.quantity = req.body.quantity ? req.body.quantity : foodItem.quantity;

			foodItem.save(function(err, foodItem) {
				if(err) {
					sendJSONresponse(res, 400, err);
				}
				else {
					sendJSONresponse(res, 200, foodItem);
				}
			});
	});
};

/* DELETE a food item */
module.exports.foodDeleteOne = function(req, res) {
	var foodid = req.params.foodid;
	if(foodid) {
			food
				.findById(req.params.foodid)
				.exec(function(err, foodItem) {
					if(!foodItem) {
						sendJSONresponse(res, 404, {
							"message": "No food it em found with specified ID"
						});
						return;
					}
					else if(err){
						console.log(err);
						sendJSONresponse(res, 404, err);
						return;
					}
					if(foodItem.quantity > 1) {
						foodItem.quantity--;
						foodItem.save(function(err, foodItem) {
							if(err) {
								sendJSONresponse(res, 400, err);
							}
							else {
								sendJSONresponse(res, 200, foodItem._id);
							}
						});
					}
					else{
						food.findByIdAndRemove(foodid)
						.exec(
							function(err, foodItem){
								if(err){
									sendJSONresponse(res, 404, err);
									return;
								}
								console.log("Food ID " + foodid + " deleted");
								sendJSONresponse(res, 200, foodid);
							});
					}
				});
		}
		
	else {
		sendJSONresponse(res, 404, {
			"message": "No food id supplied in request"
		});
	}
};