const nodemailer = require('nodemailer');
var authentication=require('../controllers/authentication');
var productService = require('../services/ProductService');  //RSG 02/13/2017 added a service
var checkoutService = require('../services/CheckoutService');
var cartResource = require('../epbroker/CartResource');
var Joi= require('joi');
module.exports=[
  {
        method:'POST',
        path:'/checkout/personalinfo/',
        config:{
            auth:false,
            handler:checkoutService.savePersonalInfo,
            description: 'Stores the customer personal information on the commercedb',
            notes: 'A POST Request Storing the customer personal information on the commercedb',
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
                payload:{
                    lastname:Joi.string().required(),
                    firstname:Joi.string().required(),
                    email:Joi.string().required(),
                    phone:Joi.string().required(),
                    currentcarrier:Joi.string().required()
                },
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Stores the customer personal information on the commercedb',
            notes: 'Stores the customer personal information on the commercedb',
            tags: ['api']
            }
        },
    {
        method:'GET',
        path:'/checkout/creditratingtypes/',
        config: {
            auth: false,
            handler: checkoutService.getCreditScoreRangeType,
            description: 'Get all possible credit score range type',
            notes: 'A GET Request to Get all possible credit score range type',
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responseMessages: [
                        {code: 400, message: 'Bad Request'},
                        {code: 500, message: 'Internal server error'}
                    ]
                }
            },
            validate: {
            headers: Joi.object({
                'authorization': Joi.string().required()
            }).unknown()
            },
            description:'Get all possible credit score range type',
            notes: 'Get all possible credit score range type',
            tags: ['api']
        }
    },

    {
        method:'POST',
        path:'/checkout/creditrating/',
        config:{
            auth:false,
            handler:checkoutService.saveCreditScoreRangeType,
            description: 'Stores the Customer credit score range type',
            notes: 'A POST Request to Stores the customer personal information',
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
                payload:{
                    creditscorerangetype:Joi.string().required()
                },
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Stores the Customer credit score range type',
            notes: 'Stores the Customer credit score range type',
            tags: ['api']
            }
        },
    {
        method:'POST',
        path:'/checkout/billandship/',
        config:{
            auth:false,
            handler:checkoutService.saveBillAndShipInfo,
            description: 'Stores the customer shipping and billing information on the commercedb',
            notes: 'A POST Request Stores the customer shipping and billing information on the commercedb',
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
                payload:{
                    cart: Joi.object().required(),
                    total: Joi.number().required(),
                    items: Joi.object().required()
                },
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Stores the customer shipping and billing information on the commercedb',
            notes: 'Stores the customer shipping and billing information on the commercedb',
            tags: ['api']
        }
    },

    {
        method:'POST',
        path:'/checkout/accesstoken/',
        config:{
            auth:false,
            handler:cartResource.getNewAccessToken,
            description: 'Get the Access Token for Accessing the Service',
            notes: 'A POST Request to Get the Access Token for Accessing the Service',
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
                payload:{
                    bearertoken:Joi.string().required()
                },
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()
            },

            description:'Get the Access Token for Accessing the Service',
            notes: 'Get the Access Token for Accessing the Service',
            tags: ['api']
        }
    },

    {
        method:'POST',
        path:'/checkout/submit/all/',
        config:{
            auth:false,
            handler:checkoutService.saveAll,
            description: 'Stores the Personal Information, Shipping, Billing And Credit Card Information on the commercedb',
            notes: 'A POST Request Storing the Personal Information, Shipping, Billing And Credit Card Information on the commercedb',
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
                 payload:{

                     cart: Joi.object().required(),
                     //total: Joi.number().required(),
                     //items: Joi.object().required(),
                     customer: Joi.object().required()
                }/*,
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()*/
            },

            description:'Stores the Personal Information, Shipping, Billing And Credit Card Information on the commercedb',
            notes: 'Stores the Personal Information, Shipping, Billing And Credit Card Information on the commercedb',
            tags: ['api']
        }
    }
];