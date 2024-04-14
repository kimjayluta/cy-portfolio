const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://demoblaze.com",
	},
	chromeWebSecurity: false,
	waitForAnimation: true,
	animationDistanceThreshold: 20,
	defaultCommandTimeout: 60000,
	execTimeout: 60000,
	pageLoadTimeout: 60000,
	failOnStatusCode: false,
});
