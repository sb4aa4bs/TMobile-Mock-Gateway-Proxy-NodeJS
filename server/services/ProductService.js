var productDao = require('../epbroker/ProductResource');  //'../daos/ProductDao' '../epbroker/ProductResource' //RSG 02/12/2017 added this service
var JWT   = require('jsonwebtoken');
var decoded;
module.exports={

    findAllProducts: function(request,response)  {
        productDao.findAllProducts(response);
    },
    getProductById: function(request,response)  {
        productDao.getProductById(request,response);
    },

    findProductsByKeyWord : function(request,response) {
        productDao.searchProductByKeyword(request,response);
    }

};