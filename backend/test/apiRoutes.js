const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);

describe("API Routes", function () {
	let requester;
	let response;

	before(async function () {
		requester = chai.request.agent(app)
	});

	describe("Login Route", function () {
		describe("Should successfully login with the correct credentials", function () {
			const demoCredentials = {
				credential: 'demo@user.io',
				password: 'password',
			};

			const demoInformation = {
				id: 1,
				username: 'Demo Manager',
				email: 'demo@user.io',
			};

			before(async function () {
				response = await requester.post('/api/session')
					.type('json')
					.send(JSON.stringify(demoCredentials));
			});

			it("Returns status code 200", function () {
				expect(response).to.have.status(200);
			});

			it("Sends back the correct user information", function () {
				const user = response.body.user;
				expect(user).to.include(demoInformation);
			});

			it("Sets a JWT token on the cookie", function () {
				expect(response).to.have.cookie('token');
			});

			after(async function() {
				await requester.delete('/api/session');
			});

		});

		describe("Should fail to login with incorrect credentials", function () {
			before(async function () {
				response = await requester.post('/api/session')
					.type('json')
					.send(JSON.stringify({
						credential: "demo@user.io",
						password: "wrongpassword",
					}));
			});

			it("Returns with status code 401", function () {
				expect(response).to.have.status(401);
			});

			it("Provides an error to render on the page", function () {
				const body = response.body;
				expect(body.errors).to.exist.and.not.be.empty;
			});

			it("Does not send back any user information", function () {
				expect(response.body).to.not.have.property("user");
			})

			it("Does not set a JWT token cookie", function () {
				expect(response).to.not.have.cookie('token');
			});
		});
	});

	describe("Signup Route", function() {

		describe("When signing up with correct form data", function() {
			const newUserInfo = {
				username: 'test user',
				email: 'test@test.io',
				password: 'password',
			};
	

			before(async function() {
				response = await requester
								  .post('/api/users')
								  .type('json')
								  .send(JSON.stringify(newUserInfo));
			});

			it("Returns status code 200", function() {
				expect(response).to.have.status(200);
			});

			it("Returns the information of the newly created user", function() {
				const body = response.body;
				expect(body.user).to.include({
					username: 'test user',
					email: 'test@test.io',
				});
			});

			it("Sets a JWT token cookie", function() {
				expect(response).to.have.cookie("token");
			});

			after(async function() {
				await requester.delete('/api/session');
			})
		});

		describe("When signing up with an incorrect username", function() {
			const newUserInfo = {
				username: '',
				email: 'test@test.io',
				password: 'password',
			};

			before(async function() {
				response = await requester
								  .post('/api/users')
								  .type('json')
								  .send(JSON.stringify(newUserInfo));
			});

			it("Returns with status code 400", function() {
				expect(response).to.have.status(400);
			});

			it("Does not set a JWT token cookie", function() {
				expect(response).to.not.have.cookie('token');
			});
		});
	});

	describe("Logout Route", function() {
		const demoCredentials = {
			credential: 'demo@user.io',
			password: 'password',
		};

		before(async function() {
			response = await requester
							 .post('/api/session')
							 .type('json')
							 .send(JSON.stringify(demoCredentials));

			response = await requester.delete('/api/session');
		});

		it("Removes the JWT token cookie", function() {
			expect(response).to.not.have.cookie('token');
		});
	});

	describe("Restore user route", function() {
		describe("When signed in with a valid JWT", function() {
			const demoCredentials = {
				credential: 'demo@user.io',
				password: 'password',
			};

			before(async function() {
				response = await requester
								 .post('/api/session')
								 .type('json')
								 .send(JSON.stringify(demoCredentials));
			});

			it("Returns the logged in user information", async function() {
				expect(response).to.have.cookie('token');

				const newResponse = await requester.get('/api/session');

				expect(newResponse.body.user).to.exist;
				expect(newResponse.body.user).to.include({
					username: 'Demo Manager',
					email: 'demo@user.io',
				});
			});

			after(async function() {
				await requester.delete('/api/session');
			});
		});

		describe("When not signed in with a valid JWT", function() {
			it("Returns a null user", async function() {
				const failedResponse = await requester.get('/api/session');

				expect(failedResponse.body.user).to.be.null;
			})
		})
	});

	describe("Routes that don't exist", function() {
		before(async function () {
			response = await requester.get('/api/unknown');
		});

		it("Returns with status code 404", function() {
			expect(response).to.have.status(404);
		});
	});

	after(async function () {
		await requester.close();
	});
});