import HomePage from "../page_objects/pages/HomePage";

describe("Homepage", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
	});

	it("Clicks the carousel and verify the images", () => {
		/**
		 * Simple case where we make sure that the carousel is working
		 */
		HomePage.clickNextCarouselButton();
		HomePage.clickPrevCarouselButotn();
	});

	it("Filter the products by categories", () => {
		/**
		 * This case making sure that the Category shows the correct product
		 */

		HomePage.clickPhoneCategory();
		HomePage.verifyDisplayedProduct("Samsung galaxy s6");

		HomePage.clickLaptopCategory();
		HomePage.verifyDisplayedProduct("MacBook air");

		HomePage.clickMonitorCategory();
		HomePage.verifyDisplayedProduct("Apple monitor 24");
	});

	it("Click pagination buttons and verfiy the displayed products", () => {
		/**
		 * This scenario we are making sure that user can browse through the product by clicking the pagination buttons
		 */
		HomePage.clickPaginationNextButton();
		HomePage.verifyDisplayedProduct("Apple monitor 24");

		HomePage.clickPreviousPaginationButton();
		HomePage.verifyDisplayedProduct("Samsung galaxy s7");
	});
});
