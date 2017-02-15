/**
 * Created by plenarea on 20/12/16.
 */
var request = require("request");
var server = require("../server.js");

var delete_url = "http://localhost:3000/listings/18",
    login_url = "http://localhost:3000/login",token;

describe("Test delete my listings ", function () {
    it("returns token",function (done) {


        request.post({
            headers: { 'content-type': 'application/json' },
            url: login_url,
            json: { "username": "admin", "password": "admin" }
        }, function (error, response, body) {
            expect(body.length).toBeGreaterThan(30);
            token=body;
            done();
        });
    });







});

describe("DELETE /", function () {
    it("deletes 1 record", function (done) {

        request.delete({
            headers: {
                "content-type": "application/json",
                "x-key": "libera.com",
                "authorization": token
            },
            url: delete_url
        }, function (error, response, body) {
            expect(body).toEqual('1');
            done();
            //server.closeit();              //Need to uncomment this to run individual tests
        });

    });


});


