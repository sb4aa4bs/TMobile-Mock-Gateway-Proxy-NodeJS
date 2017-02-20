var productResource = require('../epbroker/ProductResource');   // 2 calls into ElasticPath, 1 call returns data from our DAO
var productDao = require('../daos/ProductDao');
var JWT   = require('jsonwebtoken');
var decoded;
module.exports={

    findAllProducts: function(request,response)  {
        productDao.findAllProducts(response);
    },
    getProductById: function(request,response)  {
        productResource.getProductById(request,response);
    },

    findProductsByKeyWord : function(request,response) {
        productResource.searchProductByKeyword(request,response);
    }

};