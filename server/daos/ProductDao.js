var models  = require('../models');
var Product = models.product;

module.exports={


    /*
     *  Get all products. Sends response from here
     */
    findAllProducts: function(reply){
        Product.findAll({/*include: models.product_details*/

        }).then(function(products){

            reply(products);
        })
            .catch(function(error){
                reply(error);
            });
    },



    /*
     *  Get product by id. We might pull other child objects too
     */
    getProductById: function (request,reply){
        var id = request.params.id;
        Product.findAll({where:{$and:[{id:id}]},include: [models.product_details]})
            .then(function(product){
                console.log('ProductDao: getProductById() success, object : ' + product);
                reply(product).code(200);
            })
            .catch(function(error){
                console.error('ProductDao: getProductById() ERROR : ' + error);
                reply(error).code(500);
            });
    },

    /*
     *  Search product by keyword. We might pull other child objects too
     */
    searchProductByKeyword: function (request,reply){
        var keyword = request.params.keyword;
        var condition = {
            where: [{
                $and: {
                    skuid: {$like: '%' + keyword + '%'},
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
            });
    },




};