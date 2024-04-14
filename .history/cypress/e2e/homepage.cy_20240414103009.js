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
	});
});
