import ProductDetailsPage from "../page_objects/pages/ProductDetailsPage";
describe("Product Details", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
	});

	it("Verify the product details elements are visible", () => {});
});
