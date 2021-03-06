var models  = require('../models');
var utils  = require('../utility/mail');
var resource = require('../epbroker/CartResource');
var Order = models.order;
var OrderDetails = models.order_details;
var ordid;
Order.hasMany(OrderDetails);


module.exports={

    /*
     *  Save the Customer's Personal Information in to the database
     */
    savePersonalInfo: function (request,reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization);
        var payload = request.payload;
        var lastname = payload.lastname;
        var firstname = payload.firstname;
        var email = payload.email;
        var phone = payload.phone;
        var currentcarrier = payload.currentcarrier;
        console.log('checkoutDao :::: savePersonalInfo() : lastname=' +lastname +', firstname=' +firstname
            +', email=' +email +', phone=' +phone +', currentcarrier=' +currentcarrier);
        // create an instance of order model
        var order = Order.build(payload);
        order.cart_id=auth_token.authorization;
        order.store='TMOBILE-ONLINE-STORE';
        order.creditscorerangetype='AWESOME-CREDIT';
        console.log(order);
        // persist an instance
        order.save()
        /* .error(function(err) {
         console.log('Order save error !!! ' + err);
         reply('Order save error !!! ' + err).code(500);
         return;
         })
         .success(function() {
         console.log('Save successful...');
         }) */
            .then(function (order) {
                id = order.id;
                console.log('Order id ' +id +' Saved Successfully in to the DB :::: ' + order);
                response = {'message': 'Successfully Saved the Customer Personal Information in to the database',
                    'error': 0,
                    'orderdetails' : [ {orderid: +id }]};
                reply(response).code(200);
            });
    },

    /*
     *  Get the Credit Score Range Type from the database
     */
    getCreditScoreRangeType: function(request, reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization);
        console.log('checkoutDao :::: getCreditScoreRangeType()');
        //TODO: RSG use this code if you want to read from DB
        //TO DO - GET
        var response = {'message': 'Successfully Got the Credit Score Range Type from the database','error': 0, items : [ {id:'AWESOME-CREDIT'}, {id:'AVERAGE-CREDIT'}, {id:'GOOD-CREDIT'}]};
        reply(response).code(200);
    },

    /*
     *  Save the Credit Score Range Type from the database
     */
    saveCreditScoreRangeType: function(request, reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization);
        var payload = request.payload;
        var creditscorerangetype = payload.creditscorerangetype;
        console.log('checkoutDao :::: saveCreditScoreRangeType() : creditscorerangetype : ' + creditscorerangetype);
        // create an instance of order model
        var order = Order.build(payload);
        order.cart_id=auth_token.authorization;
        order.store='TMOBILE-ONLINE-STORE';
        order.creditscorerangetype='AWESOME-CREDIT';
        order.lastname = '';
        order.firstname = '';
        order.email = '';
        order.phone = '';
        console.log(order);
        // persist an instance
        order.save()
        /* .error(function(err) {
         console.log('Order save error !!! ' + err);
         reply('Order save error !!! ' + err).code(500);
         return;
         })
         .success(function() {
         console.log('Save successful...');
         }) */
            .then(function (order) {
                id = order.id;
                console.log('Order id ' +id +' Saved Successfully in to the DB :::: ' + order);
                response = {'message': 'Successfully Saved the Customer Credit Range Type Information in to the database',
                    'error': 0,
                    'orderdetails' : [ {orderid: +id }]};
                reply(response).code(200);
            });
    },

    /*
     *  Save the Customer's Billing Shipping And Credit Card Information in to the database
     */
    saveBillAndShipInfo: function (request,reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization);
        var payload = request.payload;
        var shiptype = payload.shiptype;
        var shipaddress1 = payload.shipaddress1;
        var shipaddress2  = payload.shipaddress2;
        var shipcity = payload.shipcity;
        var shipstate = payload.shipstate;
        var shipzip = payload.shipzip;
        var billaddress1 = payload.billaddress1;
        var billaddress2 = payload.billaddress2;
        var billcity = payload.billcity;
        var billstate = payload.billstate;
        var billzip = payload.billzip;
        var customername = payload.customername;
        var cardno = payload.cardno;
        var expirydate = payload.expirydate;
        var cvv = payload.cvv;
        console.log('checkoutDao :::: saveBillAndShipInfo() : shiptype=' +shiptype +', shipaddress1=' +shipaddress1
            +', shipaddress2=' +shipaddress2 +', shipcity=' +shipcity +', shipstate=' +shipstate +', shipzip=' +shipzip
            +', billaddress1=' +billaddress1 +', billaddress2=' +billaddress2 +', billcity=' +billcity,
            +', billstate=' +billstate +', billzip=' +billzip +', customername=' +customername,
            +', cardno=' +cardno +', expirydate=' +expirydate +', cvv=' +cvv);
        // create an instance of order model
        var order = Order.build(payload);
        order.cart_id=auth_token.authorization;
        order.store='TMOBILE-ONLINE-STORE';
        order.creditscorerangetype='AWESOME-CREDIT';
        order.lastname = '';
        order.firstname = '';
        order.email = '';
        order.phone = '';
        console.log(order);
        // persist an instance
        order.save()
        /* .error(function(err) {
         console.log('Order save error !!! ' + err);
         reply('Order save error !!! ' + err).code(500);
         return;
         })
         .success(function() {
         console.log('Save successful...');
         }) */
            .then(function (order) {
                id = order.id;
                console.log('Order id ' +id +' Saved Successfully in to the DB :::: ' + order);
                response = {'message': 'Successfully Saved the Customer Billing and Shipping Information in to the database',
                    'error': 0,
                    'orderdetails' : [ {orderid: +id }]};
                reply(response).code(200);
            });
    },

    /*
     *  Save the Customer's Personal Information, Shipping, Billing And Credit Card Information in to the database
     */
    saveAll: function (request,reply){
        var response;
        var id;
        var auth_token = request.headers;
        var payload = request.payload;
        var customer = payload.customer;        // get to the customer object from the payload

        var lastname = customer.lastname;
        var firstname = customer.firstname;
        var email = customer.email;
        var phone = customer.phone;
        var currentcarrier = customer.currentcarrier;
        var shiptype = customer.shiptype;
        var shipaddress1 = customer.shipaddress1;
        var shipaddress2  = customer.shipaddress2;
        var shipcity = customer.shipcity;
        var shipstate = customer.shipstate;
        var shipzip = customer.shipzip;
        var billaddress1 = customer.billaddress1;
        var billaddress2 = customer.billaddress2;
        var billcity = customer.billcity;
        var billstate = customer.billstate;
        var billzip = customer.billzip;
        var customername = customer.customername;
        var cardno = customer.cardno;
        var expirydate = customer.expirydate;
        var creditreportusagetype = customer.creditreportusagetype;
        var store = customer.store;
        var cvv = customer.cvv;

        var cart = payload.cart;                // get the card object
        var cartId = cart.id;                   // the client can send us their cart id, which is currently a don't care item
        var total = cart.total;
        var items = cart.items;                 // reference to cart items which is a item list

        //console.log('AUTHORIZATION TOKEN : ' +auth_token.authorization);
        //console.log("CUSTOMER DATA :::: " +customer);
        //console.log("CART DATA :::: " +cart);
        //console.log("ITEM DATA :::: " +items);
        console.log('checkoutDao :::: saveAll() : lastname=' +lastname +', firstname=' +firstname
            +', email=' +email +', phone=' +phone +', currentcarrier=' +currentcarrier +' shiptype='
            +shiptype +', shipaddress1=' +shipaddress1 +', shipaddress2=' +shipaddress2 +', ' +
            'shipcity=' +shipcity +', shipstate=' +shipstate +', shipzip=' +shipzip
            +', billaddress1=' +billaddress1 +', billaddress2=' +billaddress2 +', billcity=' +billcity,
            +', billstate=' +billstate +', billzip=' +billzip +', customername=' +customername,
            +', cardno=' +cardno +', expirydate=' +expirydate +', cvv=' +cvv
            +', cartId=' +cartId +', total=' +total);
        // create an instance of order model

        // var order = Order.build(payload);
        var order = Order.build();

        order.cart_id = cartId; //  TODO: RSG ?? not required because we will come back later and overwrite with the token
        order.lastname = lastname;
        order.firstname = firstname;
        order.phone = phone;
        order.email = email;
        order.currentcarrier = currentcarrier;
        order.creditscorerangetype = creditreportusagetype;
        order.shiptype = shiptype;
        order.shipaddress1 = shipaddress1;
        order.shipaddress2 = shipaddress2;
        order.shipcity = shipcity;
        order.shipstate = shipstate;
        order.shipzip = shipzip;
        order.billaddress1 = billaddress1;
        order.billaddress2 = billaddress2;
        order.billcity = billcity;
        order.billstate = billstate;
        order.billzip = billzip;
        order.customername = customername;
        order.cardno = cardno;
        order.expirydate = expirydate;
        order.cvv = cvv;
        order.store = store;
        console.log(order);
        // persist the order

        order.save()

            .then(function (order) {
                id = order.id;         //TODO: Bharat you wrote to a global
                ordid = id;
                console.log('Order id ' +id +' created in the db...');

                /*
                  Send mail first since we have a order id
                 */
                utils.sendMail2Customer(order, cart);

                var ep_productIds = [];
                items.forEach(function(value){
                    var orderDetails = OrderDetails.build();
                    //orderDetails.id = '';    //TODO: Bharat ???
                    orderDetails.order_id = ordid;
                    orderDetails.product_id = value.id    // id is really product id or itemid in EP
                    ep_productIds.push(value.id);
                    orderDetails.price = value.price
                    orderDetails.tax = '7.0' ;
                    console.log('Object before the save=' + orderDetails);
                    orderDetails.save().then(function (order_detail) {
                        console.log('Order detail getting created with id  = ' + order_detail.id);
                    });
                });

                // Send the response to the customer
                response = {'order_id': id };
                reply(response).code(200);

                /*
                  We can continue processing because of nodejs main thread
                 */

                console.log('We will add the following itemId to ELASTIC PATH');
                console.log('Item id=' + ep_productIds[0]);
                console.log('Item id=' + ep_productIds[1]);
                resource.getNewAccessToken(function (token) {
                     console.log("token id " + token);
                     resource.addEPItemToCart(token, ep_productIds[0], 1, function (data) {
                        resource.addEPItemToCart(token,ep_productIds[1], 1, function (data) {
                            //
                            var cartId = token; // Currently Hard Coded, Assume Umesh might have to get it from EP, invoking the EP get Access Token Cortex API....
                            order.update(
                                // Set Attribute values
                                { cart_id:cartId},
                                // Where clause / criteria
                                { _id : ordid }
                            ).then(function() {
                                console.log("Order with id=" +ordid +",updated successfully..");
                            }).error(function(err) {
                                console.log("Order with id=" +ordid +" update failed");
                                //handle error here
                            });

                        });
                    });
                });
             });
    }
};