var cartDao = require('../epbroker/CartResource');  //use this '../daos/CartResource'//RSG 02/12/2017 added this service

module.exports={

    addItemToCart: function(request,response)  {
        cartDao.add(request,response);
    },
    updateItemInCart: function(request,response)  {
        cartDao.update(request,response);
    },
    deleteItemFromCart: function(request,response)  {
        cartDao.delete(request,response);
    },
    getCart: function(request,response)  {
        cartDao.getCart(request,response);
    },
    getMyCart: function(request,response)  {
        cartDao.getMyCart(request,response);
    }
};