const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);

describe("API Routes", function() {
    let requester;

    before(async function() {
        requester = await chai.request(app).keepOpen();
    });

    describe("Login Route", function() {
        it("Should successfully login with the correct credentials", async function() {
            const demoCredentials = {
                credential: 'demo@user.io',
                password: 'password',
            };

            const demoInformation = {
                id: 1,
                username: 'Demo Manager',
                email: 'demo@user.io',
            };

            const res = await requester.post('/api/session')
                                 .type('json')
                                 .send(JSON.stringify(demoCredentials));
            
            expect(res).to.have.status(200);
        });
    });

    after(async function() {
        await requester.close();
    })
});