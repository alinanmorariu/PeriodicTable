var request = require("request");
var base_url = "http://localhost:3000/";

describe("Hello world", function() {
    describe("GET /", function() {
        it("should return status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            })
        });

        it("should contain Hello World", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).toBe("Hello World");
                done();
            });
        })
    })
});