import Navbar from "../page_objects/components/Navbar";
import CartPage from "../page_objects/pages/CartPage";
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

	it("Verify the Cart elements", () => {
		HomePage.selectProduct(1);
		ProductDetailsPage.addToCart();
		Navbar.clickCartLink();
		CartPage.verifyCartElements();
	});
});
