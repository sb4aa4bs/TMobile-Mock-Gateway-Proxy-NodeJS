/**
 * Created by prokarma on 2/14/2017.
 */

/**
 * Created by prokarma on 2/14/2017.
 */

var httprequest = require('request');
var base_uri = 'http://ec2-35-164-110-172.us-west-2.compute.amazonaws.com:9080';
//var base_uri = 'http://localhost:9080';
//var auth_token = '4cf0a4e2-36c8-474e-97a0-860e3589fb51';
var auth_token = '101810c4-409e-433c-a359-b106267cb6c8';


module.exports = {


    /*
     *  Get all products from ELASTIC PATH. Sends response from here
     */
    findAllProducts: function (reply) {

    },


    /*
     *  Get product by id from ELASTIC PATH. We might pull other child objects too
     */
    getProductById: function (request, reply) {
        var id = request.params.id;
        console.log('ProductResource: getProductById() with object id: ' + id);
        var response = {'message': 'getProductById..', 'error': 0};
        // TODO: RSG call ELASTIC PATH
        module.exports.getItem(id, 'mobee', function (data) {
            reply(data).code(200);
        });

    },


    searchProductByKeyword: function (request, reply) {
        var keyword = request.params.keyword;
        console.log('ProductResource: searchProductByKeyWord() with object keyword: ' + keyword);
        var response = {'message': 'getProductById..', 'error': 0};
        module.exports.searchEPItems(keyword, 'mobee', function (data) {
            //RSG reply(response).code(200);
            //console.log('Date response returned from call back : ' + data);
            reply(data).code(200);
        });
    },

    searchEPItems: function (searchString, storeId, callback) {

        var productList = [];
        //console.log('searchItems..........');
        var requestData = {
            'keywords': searchString, 'page-size': '5'
        };
        httprequest(base_uri + '/cortex/searches/' + storeId + '/keywords/items?followlocation',
            {
                json: true, body: requestData, method: 'POST',
                headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
            },
            function (err, res, body) {
                if (err) {
                    console.log('Cannot communicate to ELASTIC PATH');
                    return;
                }
                var items = body.links;
                for (var item in items) {
                    var obj = items[item];
                    var type = obj.type;
                    //console.log('type..........' + type);
                    if (type === 'elasticpath.items.item') {
                        var uri = obj.uri;
                        if (uri.indexOf('/items/mobee/') > -1) {
                            var uriArray = uri.split('/');
                            var itemId = uriArray[3];
                            var counter = 0;
                            var itemsLength = items.length;
                            if (itemsLength === 6) {
                                itemsLength = 5;
                            }
                            module.exports.getItem(itemId, 'mobee', function (product) {
                                productList.push(product);
                                counter++;
                                if (counter === itemsLength) {
                                    callback(productList); }
                            });

                        }
                    }
                }
            });
    },
    getItem: function (itemId, storeId, callback) {

        console.log('Starting getItem..........');
        var Product = {};
        Product['id'] = itemId;
        Product['availability'] = '';
        Product['name'] = '';
        Product['description'] = '';
        Product['retail_price'] = '';
        Product['sale_price'] = '';
        Product['promotion'] = 'Active';
        Product['size'] = 'Standard';
        Product['configuration'] = '16 GB';
        Product['color'] = '';
        Product['skuid'] = ''
        Product['picture'] = '';
        Product['active'] = true;
        Product['contract'] = '24 months';
        Product['store'] = 'T-Mobile';

        httprequest(base_uri + '/cortex/availabilities/items/' + storeId + '/' + itemId,
            {
                json: true, method: 'GET',
                headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
            },
            function (err, res, body) {
                Product['availability'] = body['state'];
                // Display Name of Item

                httprequest(base_uri + '/cortex/itemdefinitions/' + storeId + '/' + itemId,
                    {
                        json: true, method: 'GET',
                        headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
                    },
                    function (err, res, body) {
                        Product['name'] = body['display-name'];
                        var productDetails = body['details'];
                        if (productDetails !== undefined) {
                            if (productDetails[0] !== undefined) {
                                Product['color'] = productDetails[0]['display-value'];
                            }
                            if (productDetails[1] !== undefined) {
                                Product['description'] = productDetails[1]['display-value'];
                            }
                        }

                        // Code of Item

                        httprequest(base_uri + '/cortex/lookups/items/' + storeId + '/' + itemId,
                            {
                                json: true, method: 'GET',
                                headers: {'Authorization': 'bearer ' + auth_token, 'Content-type': 'application/json'}
                            },
                            function (err, res, body) {
                                Product['skuid'] = body['code'];

                                httprequest(base_uri + '/cortex/assets/itemdefinitions/' + storeId + '/' + itemId,
                                    {
                                        json: true, method: 'GET',
                                        headers: {
                                            'Authorization': 'bearer ' + auth_token,
                                            'Content-type': 'application/json'
                                        }
                                    },
                                    function (err, res, body) {
                                        var images = body.links;
                                        var imageObj = images[0];
                                        var imageType = imageObj.type;
                                        if (imageType === 'elasticpath.assets.asset') {
                                            var imageUri = imageObj.uri;
                                            if (imageUri.indexOf('/assets/mobee/') > -1) {
                                                var imageArray = imageUri.split('/');
                                                httprequest(base_uri + '/cortex/assets/' + storeId + '/' + imageArray[3],
                                                    {
                                                        json: true, method: 'GET',
                                                        headers: {
                                                            'Authorization': 'bearer ' + auth_token,
                                                            'Content-type': 'application/json'
                                                        }
                                                    },
                                                    function (err, res, body) {
                                                        Product['picture'] = body['content-location'];
                                                    });
                                            }
                                        }

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
                                                if (body['purchase-price'] !== undefined) {
                                                    Product['retail_price'] = body['purchase-price'][0]['display'];}
                                                if (body['list-price'] !== undefined) {
                                                    Product['sale_price'] = body['list-price'][0]['display']; }
                                                //console.log('\tProduct=' + Product['code'] + ',itemid=' + Product['itemId'] + ',price=' + Product['list-price']);
                                                callback(Product);

                                            });
                                    });
                            });
                    });
            });
    }
};


