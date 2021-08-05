const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("express");
const app = require("../app");

chai.use(chaiHttp);

describe("API Routes", function() {
    let requester;
    let response;

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

            it("Sets a JWT token on the cookie", function() {
                expect(response).to.have.cookie('token');
            });

        });

        describe("Should fail to login with incorrect credentials", function() {
            before(async function() {
                response = await requester.post('/api/session')
                                          .type('json')
                                          .send(JSON.stringify({
                                              credential: "demo@user.io",
                                              password: "wrongpassword",
                                          }));
            });

            it("Returns with status code 401", function() {
                expect(response).to.have.status(401);
            });

            it("Provides an error to render on the page", function() {
                const body = response.body;
                expect(body.errors).to.exist.and.not.be.empty;
            });

            it("Does not send back any user information", function() {
                expect(response.body).to.not.have.property("user");
            })

            it("Does not set a JWT token cookie", function() {
                expect(response).to.not.have.cookie('token');
            });
        })
    });

    after(async function() {
        await requester.close();
    });
});