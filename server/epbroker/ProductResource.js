/**
 * Created by prokarma on 2/14/2017.
 */

var httprequest = require('request');
var base_uri = 'http://ec2-35-164-110-172.us-west-2.compute.amazonaws.com:9080';
//var base_uri = 'http://localhost:9080';
//var auth_token = '4cf0a4e2-36c8-474e-97a0-860e3589fb51';
var auth_token = '101810c4-409e-433c-a359-b106267cb6c8';


module.exports={


    /*
     *  Get all products from ELASTIC PATH. Sends response from here
     */
    findAllProducts: function(reply){

    },



    /*
     *  Get product by id from ELASTIC PATH. We might pull other child objects too
     */
    getProductById: function (request,reply){
        var id=request.params.id;
        console.log('ProductResource: getProductById() with object id: ' + id );
        var response = {'message': 'getProductById..','error': 0};
        // TODO: RSG call ELASTIC PATH
        reply(response).code(200);
    },


    searchProductByKeyword: function (request,reply) {
        var keyword=request.params.keyword;
        console.log('ProductResource: searchProductByKeyWord() with object keyword: ' + keyword );
        var response = {'message': 'getProductById..','error': 0};
        module.exports.searchEPItems(keyword, 'mobee', function (response) {
            reply(response).code(200);
            console.log('Date response returned from the call : ' + response);
        });
    },

    searchEPItems : function (searchString, storeId, callback) {

        var requestData = {
            'keywords': searchString, 'page-size': '5'
        };
        httprequest(base_uri + '/cortex/searches/' + storeId + '/keywords/items?followlocation',
            {
                json: true, body: requestData, method: 'POST',
                headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
            },
            function (err, res, body) {

                var items = body.links;
                for (var item in items) {
                    var obj = items[item];
                    var type = obj.type;
                    if (type === 'elasticpath.items.item') {
                        var uri = obj.uri;
                        if (uri.indexOf('/items/mobee/') > -1) {
                            var uriArray = uri.split('/');
                            var itemId = uriArray[3];
                            module.exports.getEPItem(itemId, 'mobee', function (data) {
                                callback(data);
                            });
                        }
                    }
                }
            });

    },


    getEPItem : function (itemId, storeId, callback) {

        var itemList = [];

        itemList['itemId'] = itemId;

        httprequest(base_uri + '/cortex/availabilities/items/' + storeId + '/' + itemId,
            {
                json: true, method: 'GET',
                headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
            },
            function (err, res, body) {
                itemList['availability'] = body['state'];
                // Display Name of Item

                httprequest(base_uri + '/cortex/itemdefinitions/' + storeId + '/' + itemId,
                    {
                        json: true, method: 'GET',
                        headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
                    },
                    function (err, res, body) {
                        itemList['display-name'] = body['display-name'];
                        // Code of Item

                        httprequest(base_uri + '/cortex/lookups/items/' + storeId + '/' + itemId,
                            {
                                json: true, method: 'GET',
                                headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
                            },
                            function (err, res, body) {
                                itemList['code'] = body['code'];

                                // Price of Item

                                httprequest(base_uri + '/cortex/prices/items/' + storeId + '/' + itemId,
                                    {
                                        json: true, method: 'GET',
                                        headers: {
                                            'Authorization': 'bearer ' + auth_token,
                                            'Content-type': 'application/json'
                                        }
                                    },
                                    function (err, res, body) {
                                        itemList['purchase-price'] = body['purchase-price'];
                                        itemList['list-price'] = body['list-price'];
                                        console.log('ItemList:' + itemList);
                                        callback(itemList);
                                    });
                            });
                    });
            });
    }



};
