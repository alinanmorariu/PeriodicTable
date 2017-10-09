var request = require("request");
var base_url = "http://localhost:3000/";
var elements_url = base_url + "elements";

describe("Server", function() {
    describe("GET /elements/", function() {
        it("should return status code 200", function(done) {
            request.get(elements_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            })
        });

        it("should contain element data", function(done) {
            request.get(elements_url, function(error, response, body) {
                var parsedBody = JSON.parse(body);
                expect(parsedBody[0].AtomicNumber).toBe("1");
                expect(parsedBody[0].Symbol).toBe("H");
                expect(parsedBody[0].Name).toBe("Hydrogen");
                expect(parsedBody[0].AtomicWeight).toBe("1.008");
                expect(parsedBody[0].Group).toBe("1");
                done();
            });
        })
    })
});