var cartResource = require('../epbroker/CartResource');  //use this '../daos/CartResource'//RSG 02/12/2017 added this service

module.exports={

    getNewAccessToken: function(request,reply)  {
        cartResource.getNewAccessToken(function (token) {reply(token).code(200);});
    },
    addItemToCart: function(request,response)  {
        cartResource.addItemToCart(request,response);
    },
    updateItemInCart: function(request,response)  {
        cartResource.updateItemInCart(request,response);
    },
    deleteItemFromCart: function(request,response)  {
        cartResource.deleteItemFromCart(request,response);
    },
    getCart: function(request, response)  {
        cartResource.getCart(response);
    }
};