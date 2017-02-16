var models  = require('../models');
var JWT   = require('jsonwebtoken');
var decoded;
//TODO RSG var Cart = models.cart;

module.exports={


    addItemToCart: function(request,reply)  {
        var cart_id=request.payload.cart_id;
        var item_id=request.payload.item_id;
        console.log('Cart Dao: add() with object cart_id: ' + cart_id + ',item_id=' + item_id);
        var response = {'message': 'Cart add successful..','error': 0};
        // TODO: RSG Cart.save(cart_id,item_id);
        reply(response).code(200);

    },

    updateItemInCart: function(request,reply)  {
        var cart_id=request.payload.cart_id;
        var item_id=request.payload.item_id;
        var quantity    =request.payload.quantity;
        console.log('Cart Dao: update() with object cart_id: ' + cart_id + ',item_id=' + item_id + ',quantity=' + quantity);
        var response = {'message': 'Cart update successful..','error': 0};
        // TODO: RSG Cart.update(cart_id,item_id, qty);
        reply(response).code(200);
    },

    deleteItemFromCart: function(request,reply)  {
        var cart_id=request.payload.cart_id;
        var item_id=request.payload.item_id;
        console.log('Cart Dao: delete() with object cart_id: ' + cart_id + 'item_id=' + item_id);
        var response = {'message': 'Cart delete successful..','error': 0};
        // TODO: RSG Cart.delete(cart_id,item_id);
        reply(response).code(200);
    },

    getCart: function(request,reply)  {
        var id=request.params.id;
        console.log('Cart Dao: get() for id : ' + id);
        //TODO: RSG use this code if you want to read from DB
        /*
        Cart.findAll({where:{$and:[{id:id}]},include: [models.cart_details]})
            .then(function(cart){
                console.log('CartDao: getProductById() success, object : ' + product);
                reply(product).code(200);
            })
            .catch(function(error){
                console.error('ProductDao: getProductById() ERROR : ' + error);
                reply(error).code(500);
            });
        */
        var response = {'message': 'Cart get successful..','error': 0, items : [ {id:'12'}, {id:'13'}]};
        reply(response).code(200);
    },

    getMyCart: function(request,reply)  {
        var userid=request.headers['x-token'];
        console.log('Cart Dao: getMy() for userid : ' + userid);
        //TODO: RSG use this code if you want to read from DB
        /*
         Cart.findAll({where:{$and:[{id:id}]},include: [models.cart_details]})
         .then(function(cart){
         console.log('CartDao: getProductById() success, object : ' + product);
         reply(product).code(200);
         })
         .catch(function(error){
         console.error('ProductDao: getProductById() ERROR : ' + error);
         reply(error).code(500);
         });
         */
        var response = {'message': 'Cart get successful..','error': 0, items : [ {id:'12'}, {id:'13'}]};
        reply(response).code(200);
    }

};