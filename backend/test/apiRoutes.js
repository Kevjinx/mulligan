const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);

describe("API Routes", function(done) {
    let requester;

    before(async function() {
        requester = chai.request(app).keepOpen();
    });

    describe("Login Route", function() {
        describe("Should successfully login with the correct credentials", function() {
            const demoCredentials = {
                credential: 'demo@user.io',
                password: 'password',
            };

            const demoInformation = {
                id: 1,
                username: 'Demo Manager',
                email: 'demo@user.io',
            };

            let response;

            before(async function() {
                response = await requester.post('/api/session')
                                          .type('json')
                                          .send(JSON.stringify(demoCredentials));
            });

            it("Returns status code 200", function() {
                expect(response).to.have.status(200);
            });

            it("Sends back the correct user information", function() {
                const user = response.body.user;
                expect(user).to.include(demoInformation);
            });

        });
    });

    after(async function() {
        await requester.close();
    });
});