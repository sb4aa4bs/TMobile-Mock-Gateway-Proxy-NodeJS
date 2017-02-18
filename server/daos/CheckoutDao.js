var models  = require('../models');
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
        var customer = payload.customer;
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
        var cart = payload.cart;
        var cartId = cart.id;
        var total = cart.total;
        var items = cart.items;
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
        order.id = '';
        order.cart_id = auth_token.authorization;
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
        order.createdAt = '';
        order.updatedAt = '';
        order.store = store;
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
                ordid = id;
                console.log('Order id ' +id +' Saved Successfully in to the DB :::: ' + order);
                items.forEach(function(value){
                    var orderDetails = OrderDetails.build();
                    orderDetails.id = '';
                    orderDetails.order_id = ordid;
                    orderDetails.product_id = value.id
                    orderDetails.price = value.price
                    orderDetails.tax = value.tax
                    orderDetails.createdAt = '';
                    orderDetails.updatedAt = '';
                    console.log(value.id);
                    console.log(value.price);
                    console.log(value.tax);
                    console.log(orderDetails);
                    orderDetails.save();
                });
                response = {'message': 'Successfully Saved ALL the Customer Personal Information, Shipping, ' +
                'Billing , Credit Card(order table) and Cart Items(order_details table) information in to the commercedb database',
                    'error': 0,
                    'orderdetails' : [ {orderid: +id }]};
                reply(response).code(200);
             });
    }
};