var cartDao = require('../epbroker/CartResource');  //use this '../daos/CartResource'//RSG 02/12/2017 added this service

module.exports={

    addItemToCart: function(request,response)  {
        cartDao.addItemToCart(request,response);
    },
    updateItemInCart: function(request,response)  {
        cartDao.updateItemInCart(request,response);
    },
    deleteItemFromCart: function(request,response)  {
        cartDao.deleteItemFromCart(request,response);
    },
    getCart: function(request, response)  {
        cartDao.getCart(response);
    }
};