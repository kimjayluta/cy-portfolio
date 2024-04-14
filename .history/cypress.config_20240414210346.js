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
	// animationDistanceThreshold: 20,
	defaultCommandTimeout: 10000,
	execTimeout: 10000,
	pageLoadTimeout: 10000,
	failOnStatusCode: false,
});
