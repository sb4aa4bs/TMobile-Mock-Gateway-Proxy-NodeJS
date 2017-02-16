var httprequest = require('request');
var JWT   = require('jsonwebtoken');
var decoded;
var base_uri = 'http://ec2-35-164-110-172.us-west-2.compute.amazonaws.com:9080';

module.exports= {


    addItemToCart: function (request, reply) {
        var cart_id = request.payload.cart_id;
        var item_id = request.payload.item_id;
        var nitems  = request.payload.nitems;
        console.log('Cart Dao: add() with object cart_id: ' + cart_id + ',item_id=' + item_id +',nitems=' + nitems);
        console.log('Cart Dao: getCart() for card_id : ' + cart_id);
        // make call to ELASTIC PATH
        module.exports.addEPItemToCart(cart_id,item_id,nitems,reply);

    },

    updateItemInCart: function (request, reply) {
        var item_id = request.payload.item_id;
        var initialNumberOfItems = request.payload.initialNumberOfItems;
        var updatedNumberOfItems = request.payload.updatedNumberOfItems;
        console.log('Cart Dao: update() with object item_id=' + item_id + ',quantity=' + initialNumberOfItems + 'updatedNumberOfItems' + updatedNumberOfItems);
        var response = {'message': 'Cart update successful..', 'error': 0};
        module.exports.updateEPItemInCart(item_id,initialNumberOfItems,updatedNumberOfItems, reply, function(reply){
            reply(response).code(200);
        });

    },

    deleteItemFromCart: function (request, reply) {
        var cart_id = request.payload.cart_id;
        var item_id = request.payload.item_id;
        console.log('Cart Dao: delete() with object cart_id: ' + cart_id + 'item_id=' + item_id);
        var response = {'message': 'Cart delete successful..', 'error': 0};
        // TODO: RSG Cart.delete(cart_id,item_id);
        reply(response).code(200);
    },

    /*
     *  id of the cart needs to be passed as a query, in our case it is a auth-token
     */
    getCart: function (request, reply) {
        var id = request.params.id;
        var auth_token = id;
        console.log('Cart Dao: getCart() for id : ' + id);
        // make call to ELASTIC PATH
        module.exports.getEPCart(auth_token,reply);
    },

    /*
     *  id of the cart is in the header[ auth-token] attribute, in our case it is a auth-token
     */
    getMyCart: function (request, reply) {
        var auth_token,id = request.headers['auth-token'];
        console.log('Cart Dao: getMyCart() for id : ' + id);
        // make call to ELASTIC PATH
        module.exports.getEPCart(auth_token,reply);
    },


    /*
     *  ELASTIC PATH ADD item to a cart. Sends response from here
     */
    addEPItemToCart: function (auth_token, itemId, numberOfItems, reply) {

        var message = 'ELASTIC PATH addCart failure.!!';
        var response = {'message': message, 'error': 500};

        httprequest({
            headers: {
                'Authorization': 'bearer ' + auth_token,
                'Accept': 'application/json'
            },
            uri: base_uri + '/cortex/carts/mobee/default/lineitems/items/mobee/' + itemId + '?followlocation',
            method: 'POST',
            json: {quantity: numberOfItems}
        }, function (err, res, body) {
            if (err) {reply(response.code(500)); console.log(message);}
            else {
                console.log(body);
                console.log(body.links);
                console.log(body.quantity);
                console.log('ELASTIC PATH addCart() success..');
                reply(body).code(200);
            }
        });

    },

    /*
     *  Get current cart with auth_token from ELASTIC PATH
     */
    getEPCart: function (auth_token, reply) {

        var message = 'ELASTIC PATH getCart failure.!!';
        var response = {'message': message, 'error': 500};

        httprequest({
            headers: {
                'Authorization': 'bearer ' + auth_token,
                'Accept': 'application/json'
            },
            uri: base_uri + '/cortex/carts/mobee/default?',
            method: 'GET'
        }, function (err, res, body) {
            if (err) {reply(response.code(500)); console.log(message);}
            else {
                console.log(body);
                var default_cart = JSON.parse(body);
                console.log(default_cart["total-quantity"]);
                console.log(default_cart["self"]);
                console.log('ELASTIC PATH getCart() success..');
                reply(default_cart).code(200);
            }
        });

    },


    /*
     *  update EP Item Into Cart
     */
    updateEPItemInCart: function (item_id,initialNumberOfItems,updatedNumberOfItems, reply) {

        httprequest.post(base_uri + '/cortex/oauth2/tokens', {
                form: {
                    grant_type: 'password',
                    role: 'PUBLIC',
                    scope: 'mobee',
                    username: '',
                    password: ''
                }
            },
            function (err, resp, body) {
                if(err){
                    console.log('Failed to get auth-token.');
                    return;
                }
                console.log(body);
                var auth_res = JSON.parse(body);
                auth_token = 'bearer ' + auth_res.access_token;
                httprequest({
                    headers: {
                        'Authorization': auth_token,
                        'Accept': 'application/json'
                    },
                    uri: base_uri + '/cortex/carts/mobee/default/lineitems/items/mobee/' + item_id + '?followlocation',
                    method: 'POST',
                    json: {quantity: initialNumberOfItems}
                }, function (err, res, body) {
                    if(err){
                        console.log('Failed to add to cart.');
                        return;
                    }
                    console.log(body);
                    console.log(body.links);
                    console.log(body.quantity);
                    var cart_links = body.links;
                    var text = "";
                    var i;
                    for (i = 0; i < cart_links.length; i++) {
                        text += 'uri =' + cart_links[i].uri + '\n';
                    }
                    console.log(text);

                    httprequest({
                        headers: {
                            'Authorization': auth_token,
                            'Accept': 'application/json'
                        },
                        uri: base_uri + '/cortex/carts/mobee/default?',
                        method: 'GET'
                    }, function (err, res, body) {
                        if(err){
                            console.log('Failed getting default cart.');
                            return;
                        }
                        console.log(body);
                        var default_cart = JSON.parse(body);
                        console.log(default_cart["total-quantity"]);
                        console.log(default_cart["self"]);
                        console.log(default_cart["links"]);
                        var lineItemsLink;
                        var cart_links_array = default_cart["links"];
                        var text = "";
                        var i;
                        for (i = 0; i < cart_links_array.length; i++) {
                            if (cart_links_array[i].rel === 'lineitems') {
                                lineItemsLink = cart_links_array[i].href;
                                console.log('Line Items Link from Cart:' + lineItemsLink);
                                break;
                            }
                        }
                        console.log('Attempting to get line items');
                        httprequest({
                            headers: {
                                'Authorization': auth_token,
                                'Accept': 'application/json'
                            },
                            uri: lineItemsLink,
                            method: 'GET'
                        }, function (err, res, body) {
                            if(err){
                                console.log('Failed to get line items in the cart!!!');
                                return;
                            }
                            console.log('Succesful, body:' + body);
                            var cart_lineitems = JSON.parse(body);
                            console.log(cart_lineitems["self"]);
                            console.log(cart_lineitems["links"]);

                            var line_items_links_array = cart_lineitems["links"];
                            var lineItemLinks = [];
                            var text = "";
                            var i;
                            for (i = 0; i < line_items_links_array.length; i++) {
                                if (line_items_links_array[i].rel === 'element') {
                                    var j = 0;
                                    lineItemLinks[j++] = line_items_links_array[i].href;
                                    console.log(lineItemLinks + '\n');
                                }
                            }

                            httprequest({
                                headers: {
                                    'Authorization': auth_token,
                                    'Accept': 'application/json'
                                },
                                uri: lineItemLinks[0],
                                method: 'PUT',
                                json: {quantity: updatedNumberOfItems}
                            }, function (err, res, body) {
                                if(err){
                                    console.log('Failed to get line item!!!');
                                    return;
                                }
                                console.log('Succesfully updated.');

                                httprequest({
                                    headers: {
                                        'Authorization': auth_token,
                                        'Accept': 'application/json'
                                    },
                                    uri: base_uri + '/cortex/carts/mobee/default?',
                                    method: 'GET'
                                }, function (err, res, body) {
                                    if (err) {
                                        console.log('failed getting default cart.');
                                        return;
                                    }
                                    console.log(body);
                                    var default_cart = JSON.parse(body);
                                    console.log('updated item quantity:' + default_cart["total-quantity"]);
                                    console.log(default_cart["self"]);
                                    console.log(default_cart["links"]);
                                    var lineItemsLink;
                                    var cart_links_array = default_cart["links"];
                                    var text = "";
                                    var i;
                                    for (i = 0; i < cart_links_array.length; i++) {
                                        if (cart_links_array[i].rel === 'lineitems') {
                                            lineItemsLink = cart_links_array[i].href;
                                            console.log('Line Items Link from Cart:' + lineItemsLink);
                                            break;
                                        }
                                    }
                                });
                            });
                        });
                    });
                });
            }
        );
        var response = {'message': 'Added Item to Cart..','error': 0};
        reply(response);

    },


    /*
     *  Get brand new access token from ELASTIC PATH
     */
    getNewAccessToken: function (auth_token) {

        var message = 'ELASTIC PATH getNewAccessToken() failure.!!!';
        var response = {'message': message, 'error': 500};

        request.post(base_uri + '/cortex/oauth2/tokens',{
            form: {
                grant_type: 'password',
                role: 'PUBLIC',
                scope: 'mobee',
                username: '',
                password: ''
            }
        }, function (err, res, body) {

            if (err) {reply(response.code(500)); console.log(message);}
            else {
                console.log(body);
                var default_cart = JSON.parse(body);
                console.log(default_cart["total-quantity"]);
                console.log(default_cart["self"]);
                console.log('ELASTIC PATH getNewAccessToken() success..');
                reply(response).code(200);
            }
        });

    },


};