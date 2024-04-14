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
		HomePage.clickNextCarouselButton();
		HomePage.clickPrevCarouselButotn();
	});

	it("Filter the products by categories", () => {
		HomePage.clickPhoneCategory();
		HomePage.verifyDisplayedProduct("Samsung galaxy s6");

		HomePage.clickLaptopCategory();
		HomePage.verifyDisplayedProduct("MacBook air");

		HomePage.clickMonitorCategory();
		HomePage.verifyDisplayedProduct("Apple monitor 24");
	});

	it("Click pagination buttons and verfiy the displayed products", () => {
		cy.wait(500);
		HomePage.clickPaginationNextButton();
		HomePage.verifyDisplayedProduct("Apple monitor 24");
		HomePage.clickPreviousPaginationButton();
		HomePage.verifyDisplayedProduct("Samsung galaxy s7");
	});
});
