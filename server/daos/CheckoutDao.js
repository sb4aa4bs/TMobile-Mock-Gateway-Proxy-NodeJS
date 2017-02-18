var models  = require('../models');
var Order = models.order;
var OrderDetails = models.order_details;
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
        order.creditscorerangetype='SUPER-CREDIT';
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
        order.creditscorerangetype='SUPER-CREDIT';
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
        order.creditscorerangetype='SUPER-CREDIT';
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
        console.log('Authorization Token : ' +auth_token.authorization);
        var payload = request.payload;
        var lastname = payload.lastname;
        var firstname = payload.firstname;
        var email = payload.email;
        var phone = payload.phone;
        var currentcarrier = payload.currentcarrier;
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

        console.log('checkoutDao :::: saveAll() : lastname=' +lastname +', firstname=' +firstname
            +', email=' +email +', phone=' +phone +', currentcarrier=' +currentcarrier +'shiptype='
            +shiptype +', shipaddress1=' +shipaddress1 +', shipaddress2=' +shipaddress2 +', ' +
            'shipcity=' +shipcity +', shipstate=' +shipstate +', shipzip=' +shipzip
            +', billaddress1=' +billaddress1 +', billaddress2=' +billaddress2 +', billcity=' +billcity,
            +', billstate=' +billstate +', billzip=' +billzip +', customername=' +customername,
            +', cardno=' +cardno +', expirydate=' +expirydate +', cvv=' +cvv
        );
        // create an instance of order model
        var order = Order.build(payload);
        order.cart_id=auth_token.authorization;
        order.creditscorerangetype='SUPER-CREDIT';
        order.store='TMOBILE-ONLINE-STORE';
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
                response = {'message': 'Successfully Saved ALL the Customer Personal Information, Shipping, ' +
                'Billing And Credit Card Information in to the database',
                    'error': 0,
                    'orderdetails' : [ {orderid: +id }]};
                reply(response).code(200);
             });
    }
};