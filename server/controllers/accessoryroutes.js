var accessoryService = require('../services/AccessoryService');  //RSG 02/13/2017 added a service
var Joi= require('joi');
module.exports=[
    {
        method: 'GET',
        path: '/accessories',
        config: {
            auth: false,
            handler: accessoryService.findAllAccessories,
            description: 'Get all accessories',
            notes: 'Returns all the accessories from the database',
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responseMessages: [
                        {code: 400, message: 'Bad Request'},
                        {code: 500, message: 'Internal server error'}
                    ]
                }
            }/*,
             headers: Joi.object({
             'authorization': Joi.string().required()
             }).unknown()*/
        }
    },
    {
        method:'GET',
        path:'/accessories/details/{id}',
        config:{
            auth:false,
            handler:accessoryService.getAccessoryById,
            description: 'Get details about a accessory with id from the database',
            notes: 'Get details about a accessory, try to get all attributes from the database',
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
        method: 'GET',
        path: '/accessories/{sku}',
        config: {
            auth: false,
            handler: accessoryService.findAccessoriesBySku,
            description: 'Get all accessories matching a sku',
            notes: 'Returns all the accessories from the database matching a sku',
            tags: ['api'],
            plugins: {
                'hapi-swagger': {
                    responseMessages: [
                        {code: 400, message: 'Bad Request'},
                        {code: 500, message: 'Internal server error'}
                    ]
                }
            },
            validate:{
                params:{
                    sku:Joi.string().required()
                }/*,
                 headers: Joi.object({
                 'authorization': Joi.string().required()
                 }).unknown()*/
            }
        }
    }

];