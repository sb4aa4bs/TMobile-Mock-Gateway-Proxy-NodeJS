/**
 * Created by plenarea on 20/12/16.
 */
/**
 * Created by plenarea on 20/12/16.
 */
var request = require("request");
var server = require("../server.js");

var update_url = "http://localhost:3000/listings/12",
    login_url = "http://localhost:3000/login",token;

describe("Test update my excursions/listings ", function () {
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

describe("UPDATE /", function () {
    it("updates 1 record", function (done) {

        request.put({
            headers: {
                "content-type": "application/json",
                "x-key": "libera.com",
                "authorization": token
            },
            url: update_url,
            json:{bedrooms:4}
        }, function (error, response, body) {
            expect(body).toEqual([1]);
            done();
            server.closeit();                    //This is the last test alphabetically so not commented
        });

    });


});


