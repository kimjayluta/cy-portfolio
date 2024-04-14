import HomePage from "../page_objects/pages/HomePage";

describe("Homepage", () => {
	beforeEach(() => {
		cy.visit("/");
	});
	it("Clicks the carousel and verify the images", () => {
		HomePage.clickNextCarouselButton();
		HomePage.clickPrevCarouselButotn();
	});
});
