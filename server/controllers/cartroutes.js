var authentication=require('../controllers/authentication');
var cartservice = require('../services/cartservice');  //RSG 02/13/2017 added a service
var Joi= require('joi');
module.exports=[
    {
        method:'GET',
        path:'/cart/my',
        config:{
            auth: 'jwt',
            handler:cartservice.getMyCart,
            description: 'Get details about my cart via my token',
            notes: 'Get details about my cart via my token',
            tags: ['api'],
            plugins:{
                'hapi-swagger':{
                    responseMessages:[
                        {code:400,message:'Bad Request'},
                        {code:500,message:'Internal server error'}
                    ]
                }
            },
            validate:{
                params:{
                    id:Joi.string().alphanum().required()
                }/*,
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()*/
            }
        }
    },
    {
        method:'GET',
        path:'/cart/{id}',
        config:{
            auth:false,
            handler:cartservice.getCart,
            description: 'Get details about this cart with id',
            notes: 'Get details about this cart',
            tags: ['api'],
            plugins:{
                'hapi-swagger':{
                    responseMessages:[
                        {code:400,message:'Bad Request'},
                        {code:500,message:'Internal server error'}
                    ]
                }
            },
            validate:{
                params:{
                    id:Joi.string().alphanum().required()  ///TODO:RSG ??
                }/*,
                 headers: Joi.object({
                 'authorization': Joi.string().required()
                 }).unknown()*/
            }
        }
    },
    {
        method:'POST',
        path:'/cart/',
        config:{
            auth:false,
            handler:cartservice.addItemToCart,
            plugins:{
                'hapi-swagger':{
                    payloadType:'json',
                    responseMessages:[
                        {code:400,message:'Bad Request'},
                        {code:500,message:'Internal server error'}
                    ]
                }
            },
            validate:{

                 payload:{
                 cart_id:Joi.string().required(),
                 item_id:Joi.string().required()
                 },
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Add cart with an item',
            notes: 'Cart single add item via this route',
            tags: ['api']
        }
    },
    {
        method:'PUT',
        path:'/cart/{id}',
        config:{
            auth:false,
            handler:cartservice.updateItemInCart,
            plugins:{
                'hapi-swagger':{
                    payloadType:'json',
                    responseMessages:[
                        {code:400,message:'Bad Request'},
                        {code:500,message:'Internal server error'}
                    ]
                }
            },
            validate:{
                params:{
                    id:Joi.string().alphanum().required()
                },/* RSG why node not starting up
                payload:{
                    cart_id:Joi.string().required(),
                    item_id:Joi.string().required(),
                    quantity:Joi.string().required
                },*/
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Update a cart with item and quantity',
            notes: 'Cart single item is updated with the quantity via this route',
            tags: ['api']
        }
    },

    {
        method:'DELETE',
        path:'/cart/{id}',
        config:{
            auth:'jwt',
            handler:cartservice.deleteItemFromCart,
            validate:{
                params:{
                    id:Joi.string().alphanum().required()
                },
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Delete a card item by id',
            notes: 'Delete existing item in the card bsaed on its id',
            tags: ['api']
        }

    }

];