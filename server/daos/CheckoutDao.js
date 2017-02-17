var models  = require('../models');
var Product = models.product;

module.exports={

    /*
     *  Search product by keyword. We might pull other child objects too
     */
    savePersonalInfo: function (request,reply){
        var auth_token = request.headers('authorization');
        var payload = request.payload;
        var lastname = payload.lastname;
        var firstname = payload.firstname;
        var email = payload.email;
        var phone = payload.phone;
        var currentcarrier = payload.currentcarrier;
        console.log('checkoutDao :::: savePersonalInfo() : Payload : ' + payload);
        console.log('checkoutDao :::: savePersonalInfo() : lastname=' +lastname +', firstname=' +firstname
            +', email=' +email +', phone=' +phone +', currentcarrier=' +currentcarrier);
        //TO DO - SAVE
        var response = 'TO DO';
        reply(response).code(200);
    },

    getCreditScoreRangeType: function(request, reply){
        // var id=request.params.id;
        console.log('checkoutDao :::: getCreditScoreRangeType :');
        //TODO: RSG use this code if you want to read from DB
        var responses = {'message': 'Credit Rating Type is got successful..','error': 0, items : [ {id:'AWESOME-CREDIT'}, {id:'AVERAGE-CREDIT'}, {id:'GOOD-CREDIT'}]};
        reply(responses).code(200);
    },
    saveCreditScoreRangeType: function(request, reply){
        // var id=request.params.id;
        //var creditscorerangetype = request.params.creditscorerangetype;
        var payload = request.payload;
        var creditscorerangetype = payload.creditscorerangetype;
        console.log('checkoutDao :::: saveCreditScoreRangeType : creditscorerangetype : ' + creditscorerangetype);
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
        var responses = {'message': 'Credit Rating Type is got successful..','error': 0, items : [ {id:'AWESOME-CREDIT'}, {id:'AVERAGE-CREDIT'}, {id:'GOOD-CREDIT'}]};
        reply(responses).code(200);
    },

    saveBillAndShipInfo: function (request,reply){
        //var lastname = request.params.lastname;
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
        console.log('checkoutDao :::: saveBillAndShipInfo : Payload : ' + payload);
        console.log('checkoutDao :::: saveBillAndShipInfo : shiptype=' +shiptype +', shipaddress1=' +shipaddress1
            +', shipaddress2=' +shipaddress2 +', shipcity=' +shipcity +', shipstate=' +shipstate +', shipzip=' +shipzip
            +', billaddress1=' +billaddress1 +', billaddress2=' +billaddress2 +', billcity=' +billcity,
            +', billstate=' +billstate +', billzip=' +billzip +', customername=' +customername,
            +', cardno=' +cardno +', expirydate=' +expirydate +', expirydate=' +expirydate);
        /* var condition = {
         where: [{
         $and: {
         skuid: {$like: '%' + lastname + '%'},
         active: true
         }
         }]
         };
         Product.findAll(condition)
         .then(function(products){
         console.log('ProductDao: searchProductByKeyWord() success, object : ' + products);
         reply(products).code(200);
         })
         .catch(function(error){
         console.error('ProductDao: getProductById() ERROR : ' + error);
         reply(error).code(500);
         });*/
        var responses = {'message': 'Credit Rating Type is got successful..','error': 0, items : [ {id:'AWESOME-CREDIT'}, {id:'AVERAGE-CREDIT'}, {id:'GOOD-CREDIT'}]};
        reply(responses).code(200);
    },

};