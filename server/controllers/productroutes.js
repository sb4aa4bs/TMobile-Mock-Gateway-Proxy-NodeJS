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
        }
  },
  {
        method:'GET',
        path:'/products/details/{id}',
        config:{
            auth:false,
            handler:productService.getProductById,
            description: 'Get details about a product with id',
            notes: 'Get details about a product, try to get all attributes',
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
            description: 'Get list of products using a keyword search',
            notes: 'Get list of products using keyword search, try to get all attributes',
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
  {
        method: 'POST',
        path: '/sendmail',
        handler: function (request, reply) {
            console.log(request.payload);
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '',
                    pass: ''
                }
            });
            var mailOptions = {
                to: 'rghosh@prokarma.com',
                subject: 'Contact',
                text: "",
                html: " <strong>From:   </strong>" + request.payload.emailaddress + "<br>" + "<strong>Check In:   </strong>" + new Date(request.payload.checkindate) + "<br>" + "<strong> Check Out:   </strong>" + new Date(request.payload.checkoutdate) + "<br>" + "<strong>Messages:   </strong>" + request.payload.messages
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                    reply(error);
                }
                reply(200);
            });
        },
  }
];