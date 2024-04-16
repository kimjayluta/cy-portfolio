import HomePage from "../page_objects/pages/HomePage";
import ProductDetailsPage from "../page_objects/pages/ProductDetailsPage";

describe("Cart", () => {
	Cypress.on("uncaught:exception", (err, runnable) => {
		console.log(err);
		return false;
	});

	beforeEach(() => {
		cy.visit("/");
	});

	it("Add a product to the cart", () => {
		HomePage.selectProduct(1);
		ProductDetailsPage.addToCart();
	});
});
