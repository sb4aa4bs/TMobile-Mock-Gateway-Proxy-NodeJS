//var productDao = require('../epbroker/ProductResource');  //'../daos/ProductDao' '../epbroker/ProductResource' //RSG 02/12/2017 added this service
var checkoutDao = require('../daos/CheckoutDao');
var cartResource = require('../epbroker/CartResource');
var JWT   = require('jsonwebtoken');
var decoded;
module.exports={

   savePersonalInfo : function(request,response) {
       checkoutDao.savePersonalInfo(request,response);
    },
    getCreditScoreRangeType : function(request, response) {
        checkoutDao.getCreditScoreRangeType(request, response);
    },
    saveCreditScoreRangeType : function(request, response) {
        checkoutDao.saveCreditScoreRangeType(request, response);
    },
    saveBillAndShipInfo : function(request,response) {
        checkoutDao.saveBillAndShipInfo(request,response);
    },
    getAccessToken : function(request,response) {
        cartResource.getNewAccessToken(request, response);
    },
    saveAll : function(request,response) {
        checkoutDao.saveAll(request, response);
    }
};