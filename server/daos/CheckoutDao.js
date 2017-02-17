var models  = require('../models');
var Product = models.product;

module.exports={

    /*
     *  Save the Customer's Personal Information in to the database
     */
    savePersonalInfo: function (request,reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization)
        var payload = request.payload;
        var lastname = payload.lastname;
        var firstname = payload.firstname;
        var email = payload.email;
        var phone = payload.phone;
        var currentcarrier = payload.currentcarrier;
        console.log('checkoutDao :::: savePersonalInfo() : lastname=' +lastname +', firstname=' +firstname
            +', email=' +email +', phone=' +phone +', currentcarrier=' +currentcarrier);
        //TO DO - SAVE

        var response = {'message': 'Successfully Saved the Customer Personal Information in to the database','error': 0};
        reply(response).code(200);
    },

    /*
     *  Get the Credit Score Range Type from the database
     */
    getCreditScoreRangeType: function(request, reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization)
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
        console.log('Authorization Token : ' +auth_token.authorization)
        var payload = request.payload;
        var creditscorerangetype = payload.creditscorerangetype;
        console.log('checkoutDao :::: saveCreditScoreRangeType() : creditscorerangetype : ' + creditscorerangetype);
        //TO DO - SAVE

        var response = {'message': 'Successfully Saved the Credit Score Range Type from the database','error': 0};
        reply(response).code(200);
    },

    /*
     *  Save the Customer's Billing Shipping And Credit Card Information in to the database
     */
    saveBillAndShipInfo: function (request,reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization)
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
        var cvv = payload.cvv
        console.log('checkoutDao :::: saveBillAndShipInfo() : shiptype=' +shiptype +', shipaddress1=' +shipaddress1
            +', shipaddress2=' +shipaddress2 +', shipcity=' +shipcity +', shipstate=' +shipstate +', shipzip=' +shipzip
            +', billaddress1=' +billaddress1 +', billaddress2=' +billaddress2 +', billcity=' +billcity,
            +', billstate=' +billstate +', billzip=' +billzip +', customername=' +customername,
            +', cardno=' +cardno +', expirydate=' +expirydate +', expirydate=' +expirydate);
        //TO DO - SAVE

        var response = {'message': 'Successfully Save the Customer Billing Shipping And Credit Card Information in to the database','error': 0};
        reply(response).code(200);
    },

    /*
     *  Save the Customer's Personal Information, Shipping, Billing And Credit Card Information in to the database
     */
    saveAll: function (request,reply){
        var auth_token = request.headers;
        console.log('Authorization Token : ' +auth_token.authorization)
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
        var cvv = payload.cvv

        console.log('checkoutDao :::: saveAll() : lastname=' +lastname +', firstname=' +firstname
            +', email=' +email +', phone=' +phone +', currentcarrier=' +currentcarrier +'shiptype='
            +shiptype +', shipaddress1=' +shipaddress1 +', shipaddress2=' +shipaddress2 +', ' +
            'shipcity=' +shipcity +', shipstate=' +shipstate +', shipzip=' +shipzip
            +', billaddress1=' +billaddress1 +', billaddress2=' +billaddress2 +', billcity=' +billcity,
            +', billstate=' +billstate +', billzip=' +billzip +', customername=' +customername,
            +', cardno=' +cardno +', expirydate=' +expirydate +', expirydate=' +expirydate
        );
        //TO DO - SAVE

        var response = {'message': 'Successfully Saved ALL the Customer Personal Information, Shipping, Billing And Credit Card Information in to the database','error': 0};
        reply(response).code(200);
    },

};