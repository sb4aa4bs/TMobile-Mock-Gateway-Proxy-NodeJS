var models  = require('../models');
var httpRequest = require('request');
var Accessory = models.accessory;

module.exports={

	/*
	 *  Get all accessories. Sends response from here
	 */
	findAllAccessories: function(reply){
		Accessory.findAll({/*include: [models.accessory_details,models.accessory_photos]*/ })
			.then(function(accessories){
				reply(accessories);
			})
			.catch(function(error){
				reply(error);
			});
	},


	/*
	 *  Get accessory by id. We might pull other child objects too
	 */
    getAccessoryById: function (request,reply){
        var id = request.params.id;
        Accessory.findAll({where:{$and:[{id:id}]},include: [models.accessory_details]})
            .then(function(accessory){
                console.log('AccessoryDao: getAccessoryById() success, object : ' + accessory);
                reply(accessory).code(200);
            })
            .catch(function(error){
                console.error('AccessoryDao: getAccessoryById() ERROR : ' + error);
                reply(error).code(500);
            });
    },


    /*
     *  Find/Search accessory by criteria. Sends response from here
     *  Right now via sku
     *
     */
    findAccessoriesBySku: function (request,reply){
		var condition;
		var sku= request.params.sku;
		console.log('AccessoryDao : findAccessoriesBySku() called');

        var condition = {
            where: [{
                $and: {
                    skuid: {$like: '%' + sku + '%'},
                    active: true
                }
            }]
        };
        Accessory.findAll(condition)
            .then(function(accessory){
                console.log('AccessoryDao: findAccessoriesBySku() success, object : ' + accessory);
                reply(accessory).code(200);
            })
            .catch(function(error){
                console.error('AccessoryDao: findAccessoriesBySku() ERROR : ' + error);
                reply(error).code(500);
            });

        /* Call the integration EP URI route
        var base_uri ='http://localhost:8080';
		httpRequest({
		 		headers: {
		 			'Authorization': 'testing',
		 			'Accept': 'application/json'
		 		},
		 		uri: base_uri + '/accessories/45',
		 		method: 'GET'
		}, function (err, res, body) {
		 		console.log(body);
		 		console.log('Ideally re')
		});
		*/
	}

};