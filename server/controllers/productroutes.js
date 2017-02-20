const nodemailer = require('nodemailer');
var authentication=require('../controllers/authentication');
var productService = require('../services/ProductService');  //RSG 02/13/2017 added a service
var Joi= require('joi');
module.exports=[
  {
        method:'GET',
        path:'/products',
        config: {
            auth: false,
            handler: productService.findAllProducts,
            description: 'Get all products',
            notes: 'Returns all the products from the database',
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responseMessages: [
                        {code: 400, message: 'Bad Request'},
                        {code: 500, message: 'Internal server error'}
                    ]
                }
            }
            /*,
             headers: Joi.object({
             'authorization': Joi.string().required()
             }).unknown()*/
        }
  },
  {
        method:'GET',
        path:'/products/details/{id}',
        config:{
            auth:false,
            handler:productService.getProductById,
            description: 'Get details about a product with id from the database',
            notes: 'Get details about a product, try to get all attributes from the database',
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
                    id:Joi.string().required()  //removed aplhanumeric.
                }/*,
                headers: Joi.object({
                    'authorization': Joi.string().required()
                }).unknown()*/
            }
        }
  },
  {
        method:'POST',
        path:'/products/search/{keyword}',
        config:{
            auth:false,
            handler:productService.findProductsByKeyWord,
            description: 'Get list of products using a keyword search from EP',
            notes: 'Get list of products using keyword search, try to get all attributes from EP',
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
                    keyword:Joi.string().required()
                }/*,
                 headers: Joi.object({
                 'authorization': Joi.string().required()
                 }).unknown()*/
            }
        }
  },

];