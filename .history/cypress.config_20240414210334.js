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
	defaultCommandTimeout: 30000,
	execTimeout: 30000,
	pageLoadTimeout: 30000,
	failOnStatusCode: false,
});
